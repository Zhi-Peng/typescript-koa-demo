import * as Router from 'koa-router'

const router = new Router.default()
router.get('/', (ctx) => {
  ctx.body = 'get login'
})


export default router.routes()