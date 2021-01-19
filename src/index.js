import koa from 'koa'
import JWT from 'koa-jwt'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
import config from './config/index'
import errorHeadle from './common/ErrorHandle'

const app = new koa()

const isDevMode = process.env.NODE_ENV === 'production' ? false : true

// 定义请求公共路径 不需要jwt鉴权, /^\/login/
const jwt = JWT({ secret: config.JWT_SECRET }).unless({ path: [/^\/public/, /^\/login/] })

/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet(),
  errorHeadle,
  jwt
])

if (!isDevMode) {
  app.use(compress())
}

app.use(middleware)
app.use(router())

app.listen(3000)

/**
 *
今日工作总结
前端：李金鑫
时间：2021.01.15
工作内容：
1.添加ip屏蔽
2.检查后台是否正常打开
3.检查落地页是否正常打开
已完成：
1.都已完成
未完成：
1.无
*/
