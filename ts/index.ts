"use strict";
import * as Koa from 'koa'
import * as router from './container'

const app = new Koa.default()

app.use(router.default)

app.listen(3000, () => {
  console.log('3000成功');
})