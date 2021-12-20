function foo() {
    console.log('我是默认导出')
}

let str = "我是直接导出"
// export  default  foo;

//可以使用下面这种方式进行导出  设置as 别名是 default 这样在输出的时候就可以随便写一个变量接收
export {foo as default, str};
