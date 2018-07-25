const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  console.log('mogo')
  const url = req.url
  if (url === '/favicon.ico') {
    return
  }

  res.end('数据库')
}).listen(8000, () => {
  console.log('8000')
})