const express = require('express');
const { json } = require('express/lib/response');

const app = express();


app.all('/hello-Ajax', function (require, res) {
    res.header('Access-Control-Allow-Origin', '*'); //自定义中间件，设置跨域需要的响应头。
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //允许任何方法
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token'); //允许任何类型
    let str = {
        name: "CBA",
    }

    res.end(`hello(${JSON.stringify(str)})`)
})

app.listen(9000, function () {
    console.log("服务已经启动了~");
})