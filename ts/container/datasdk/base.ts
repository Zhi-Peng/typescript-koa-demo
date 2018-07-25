import * as superagent from 'superagent'

export default class Base {
  public rootPath: string
  constructor (rootPath: string) {
    this.rootPath = rootPath
  }

  async get (id?: string) {
    const res = await superagent.default.get(this.rootPath)
    console.log(res.text, 'res');
    
    return res.text
  }

  async create (data: any) {
    const res = await superagent.default.post(this.rootPath).send(data)
    console.log(data, 'create')
  }

  delete () {
    console.log('delete')
  }
}