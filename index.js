// 引入http 模块
var http = require('http')
var server = http.createServer()

server.listen(8080,()=>{
    console.log('连接端口成功')
})