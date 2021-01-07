import redis from 'redis'
import { promisifyAll } from 'bluebird'
import config from './index'

const options = {
    host: config.REDIS.host,
    prot: config.REDIS.prot,
    password: config.REDIS.password,
    // 答复将作为缓冲区发送到回调
    detect_buffers: true,
    retry_strategy: function (options) {
        if (options.error && options.error.code === 'ECONNREFUSED') {
            // 当前出现连接错误
            return new Error('The server refused the connection');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
            // 连接时间过长
            return new Error('Retry time exhausted');
        }
        if (options.attempt > 10) {
            // 连接次数大于10
            return undefined;
        }
        return Math.min(options.attempt * 100, 3000)
    }
}

// const client = redis.createClient(options)
const client = promisifyAll(redis.createClient(options))


// 连接失败
client.on('error', (err) => {
    console.log('Redis client Error :' + err)
})

const setValue = (key, value, time) => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return
    }
    if (typeof value === 'string') {
        // 设置过期时间 自动删除数据库里的信息
        if (typeof time !== 'undefined') {
            client.set(key, value, 'EX', time)
        } else {
            client.set(key, value)
        }
    } else if (typeof value === 'object') {
        // {key1:value1,key2:value2}
        //object.keys(value) => [key1,key2]
        //redis.print 一个方便的回调函数，用于在测试时显示返回值
        Object.keys(value).forEach((item) => {
            client.hset(key, item, value[item], redis.print)
        })
    }
}

// 将get方法转换成异步的
// const { promisify } = require('util')
// const getAsync = promisify(client.get).bind(client)

const getValue = (key) => {
    // return getAsync(key)
    return client.getAsync(key)
}

const getHValue = (key) => {
    // client.hgetall 应答将被转换成一个JavaScript对象
    // 这样就可以使用JavaScript语法与响应交互。
    // hgetall返回一个由散列键组成的对象。
    // return promisify(client.hgetall).bind(client)(key)
    return client.hgetallAsync(key)
}

const delValue = (key) => {
    client.del(key, (err, res) => {
        if (res === 1) {
            console.log('delect successfully')
        } else {
            console.log('delect redis key error:' + err)
        }
    })
}


export {
    client,
    setValue,
    getValue,
    getHValue,
    delValue
}