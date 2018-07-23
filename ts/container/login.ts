import * as Router from 'koa-router'
// import sdk from './datasdk'

const router = new Router.default()
router.get('/', (ctx) => {
  ctx.body = 'get login'
})


export default router.routes()