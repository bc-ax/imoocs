import send from '../config/MailConfig'
import momend from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import { checkCode } from '@/common/Utils'
import User from '@/model/User'

class LoginController {
    constructor() { }
    async forget(ctx) {
        const { body } = ctx.request
        try {
            let result = await send({
                code: '1234',
                expire: momend().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                email: body.username,
                user: 'bc-ax',
            })
            ctx.body = {
                code: 200,
                data: result,
                msg: '邮件发送成功'
            }
        } catch (error) {
            console.log(error)
        }
    }

    async login(ctx) {
        console.log('login')
        // 接收用户的数据 sid code sid=key
        const { body } = ctx.request
        let sid = body.sid
        let code = body.code
        let result = await checkCode(sid, code)
        console.log("result" + result)
        //验证图片验证码的时效性，正确性
        if (result) {
            console.log('图片验证成功');
            // 验证用户账号密码是否正确
            let checkUserPasswd = false
            // 查询数据库中是否存在用户传过来的username
            let user = await User.findOne({ username: body.username })
            if (user.password === body.password) {
                checkUserPasswd = true
            }
            if (checkUserPasswd) {
                //验证难过，返回token数据
                // 获取token
                let token = jsonwebtoken.sign({ _id: 'brian' }, config.JWT_SECRET, {
                    expiresIn: '1d'
                })
                ctx.body = {
                    code: 200,
                    token: token
                }
            } else {
                ctx.body = {
                    code: 404,
                    msg: '用户名或密码错误'
                }
            }
        } else {
            ctx.body = {
                code: 401,
                msg: '图片验证码错误'
            }
        }

    }
}

export default new LoginController()