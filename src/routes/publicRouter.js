import Router from 'koa-router'
import publicController from '../api/PublicController'

const router = new Router()

// 请求路径前缀
router.prefix('/public')
router.get('/getCaptcha', publicController.getCaptcha)

export default router
