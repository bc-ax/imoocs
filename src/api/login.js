import axios from '@/utils/request'
// import { options } from 'svg-captcha'

const getCode = (sid) => {
  return axios.get('/getCaptcha', {
    // 参数 /getCaptcha?sid=sid
    params: {
      sid: sid
    }
  })
}

const forget = option => {
  return axios.post('/forget', {
    ...option
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

export { getCode, forget }
