import axios from '@/utils/request'
// import { options } from 'svg-captcha'

// 获取验证码
const getCode = (sid) => {
  return axios.get('/getCaptcha', {
    // 参数 /getCaptcha?sid=sid
    params: {
      sid: sid
    }
  })
}

//找回密码 账号 验证码
const forget = option => {
  return axios.post('/forget', {
    ...option
  })
}

// 登陆 用户名 密码 验证码 token
const login = (loginInfo) => {
  return axios.post('/login', {
    ...loginInfo
  })
}

// 注册 邮箱 用户名 密码 确认密码 code token
const reg = (regInfo) => {
  return axios.post('/reg', {
    ...regInfo
  })
}

// const forget = async option => {
//   let result = ''
//   try {
//     result = await axios.post('/forget', {
//       ...option
//     })
//     if (result.status === 200) {
//       return result.data
//     }
//   } catch (error) {
//     console.log(error)
//   }
//   return result
// }

export {
  getCode,
  forget,
  login,
  reg
}
