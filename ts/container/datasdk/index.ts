import Feathers from './feathers'

const route = [
  'user',
]
declare const global: any;

const bar: any = {}
const foo: any = () => {
  return bar
}
foo.init = () => {
  route.map(item => {
    bar[item] = new Feathers(global.$g.rootPath, item)
  })
}
foo.init()
export default foo