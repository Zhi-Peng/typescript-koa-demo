declare const global: NodeJS.Global
const $g: any = global
$g.$g = {}
// 或 var ins:any = (<any>global).dd = 'fas'
// $g.$g.rootPath = 'http://www.webpp.cn'
$g.$g.rootPath = 'http://192.168.1.201:8000'

export default $g