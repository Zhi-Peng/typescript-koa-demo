import * as Router from 'koa-router'
const router = new Router.default()
const mod = [
  'user',
  'login'
]

mod.map(item => {
  router.use(`/${item}`, require(`./${item}`).default)
})

router.all('/*', (ctx) => {
  // TODO 要报错，前端页面可以重定向，后台接口直接报错
  ctx.redirect('/user')
})


export default router.routes()