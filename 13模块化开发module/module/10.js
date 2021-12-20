let s = 100;

function foo() {
    console.log("我是 export default 命令导出的");
}

export default foo;

//使用default后面是不允许跟着变量声明语句的会报错
// export default  let nb = 100;

export {s} ;