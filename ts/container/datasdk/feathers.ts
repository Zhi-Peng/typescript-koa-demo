import Base from './base'
export default class Feathers extends Base {
  constructor (rootPath: string, path: string) {
    super(`${rootPath}/${path}`)
  }

  add (data?: any) {
    console.log('Feathers')
  }
}