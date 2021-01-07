import axios from 'axios'
import errorHander from './errorHander.js'

class HttpRequest {
  // constructor 指向创建当前对象的构造函数
  // class创建时必需有一个constructor 不设置将会默认添加
  // new 实例时将会自动调用constructor
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  // 获取axios的配置
  getInsideConfig() {
    const config = {
      // 开发模式下
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      // 连接时间限制
      timeout: 1000
    }
    return config
  }

  // 设定拦截器
  interceptors(instance) {
    // 请求时的拦截
    instance.interceptors.request.use(
      config => {
        // console.log('config:' + config)
        return config
      },
      error => {
        errorHander()
        return Promise.reject(error)
      }
    )

    // 响应请求时的拦截
    instance.interceptors.response.use(
      res => {
        // console.log('res:' + res)
        if (res.status === 200) {
          // Promise.resolve 将现有对象转换成Promise对象
          return Promise.resolve(res.data)
        } else {
          // Prmise.reject 返回一个全新的Promise实例，该实例的的状态为rejected(拒绝)
          return Promise.reject(res)
        }
      },
      error => {
        errorHander()
        return Promise.reject(error)
      }
    )
  }

  // 创建实例
  request(options) {
    const instance = axios.create()
    // Object.assign() 目标对象 源对象  目标对象浅拷贝得到对象的引用 跟着更改
    // config配置
    const newOptions = Object.assign(this.getInsideConfig, options)
    // console.log(newOptions) 返回的是getInsideConfig()
    // 拦截器
    this.interceptors(instance)
    return instance.request(newOptions)
  }

  get(url, config) {
    const options = Object.assign(
      {
        methods: 'get',
        url: url
      },
      config
    )
    return this.request(options)
  }

  post(url, data) {
    return this.request({
      methods: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
