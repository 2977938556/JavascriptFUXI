//引入express 模块
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.all('/jquery', function (require, reset) {
    // 设置跨域
    reset.setHeader('Access-Control-Allow-Origin', '*');
    reset.send('延时参数');

})


app.listen(8000, () => {
    console.log("服务已经启动了。。.请使用 http://192.168.1.105:8000/ 方式登录")
})