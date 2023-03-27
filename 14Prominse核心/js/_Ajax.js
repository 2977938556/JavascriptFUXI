function _Xhr(url) {

    //实例化一个promise 对象并且将其返回出去
    return new Promise((reoslve, reject) => {
        //创建一个 Ajax对象
        let xhr = new XMLHttpRequest();


        //设置请求方式
        xhr.open("GET", url, true);

        xhr.send(null)

        //监听服务器发送过来的数据  处理数据
        xhr.onload = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    data = JSON.parse(xhr.responseText);
                    setTimeout(() => {
                        reoslve(data) //成功就将数据返回出去
                    }, 500)

                } else {
                    reject({
                        mase: "404",
                        name: "错误"
                    })
                }
            }
        }
    })
}