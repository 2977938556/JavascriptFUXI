//引入express 模块
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.all('/get', function (require, reset) {
    // 设置跨域
    reset.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应头
    reset.setHeader('Access-Control-Allow-Headers', '*')





    reset.send(JSON.stringify({
        names: '肥猫呀~'
    }));

})

app.all('/post', function (require, reset) {
    // 设置跨域
    reset.setHeader('Access-Control-Allow-Origin', '*');
    reset.send(JSON.stringify({
        sex: '男~'
    }));
})

app.all('/all', function (require, reset) {
    // 设置跨域
    reset.setHeader('Access-Control-Allow-Origin', '*');
    reset.send(JSON.stringify({
        eage: '20'
    }));
})


app.all('/fetch', function (require, reset) {
    // 设置跨域
    reset.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应头
    reset.setHeader('Access-Control-Allow-Headers', '*')
    reset.send(JSON.stringify({
        eage: 'feach 用来替代'
    }));
})






app.listen(8000, () => {
    console.log("服务已经启动了。。.请使用 http://192.168.1.105:8000/ 方式登录")
})