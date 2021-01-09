import svgCaptcha from 'svg-captcha'
import { setValue } from '@/config/RedisConfig'

class PublicController {
  constructor() { }
  async getCaptcha(ctx) {
    const body = ctx.request.query
    // 获取前端传过来的sid token值
    console.log(body.sid)

    const newCaptca = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 38,
    })
    // 验证码
    console.log(newCaptca.text)
    // 将数据写入redis  token 验证码的值  超时删除时间 单位：S 10分钟
    setValue(body.sid, newCaptca.text, 10 * 60)
    // getValue(body.sid).then((res) => {
    //   console.log(res)
    // })

    ctx.body = {
      code: 200,
      data: newCaptca.data,
    }
  }
}

export default new PublicController()
