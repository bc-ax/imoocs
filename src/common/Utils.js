import { getValue } from '@/config/RedisConfig'

const checkCode = async (key, value) => {
    // 查询数据库中的sid
    const redisData = await getValue(key)
    if (redisData != null) {
        // 将数据库中的code与用户的code 转换成小写并比较
        if (redisData.toLowerCase() === value.toLowerCase()) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

export {
    checkCode
}