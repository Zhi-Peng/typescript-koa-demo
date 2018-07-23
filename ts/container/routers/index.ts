export default (router: any): any => {
  router.get('/', (ctx: any): void => {
    ctx.body = 'root'
  })

  router.get('/list', (ctx: any): void => {
    ctx.body = 'list'
  })
  return router
}