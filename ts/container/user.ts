import * as Router from 'koa-router'
import _sdk from './datasdk'

const modname = 'user'
const sdk = _sdk()
const curmod = sdk[modname]
const router = new Router.default()
router.get('/', async (ctx) => {
  const res = await curmod.get()
  console.log(res, 'user res');
  ctx.body = res
})

export default router.routes()