//symbol 表示独一无二的值 ，比如定义唯一的属性名称，定义不会重复的常量等
// symbol 括号里的不是值只是一个描述

let a = Symbol("123");


//symbol 不可以参与运算
// console.log(a + 1); //报错



//获取symbol里面的描述
console.log(a.toString()); //Symbol(123)
console.log(String(a)); //Symbol(123)
//因为symbol就是一个true
console.log(Boolean(a)); //true
// console.log(a.description()); //true




//symbol 的高级用法

//用法1
let ast = Symbol();
let rog = {};
//将symbol 设置成对象的属性
rog[ast] = "hello word"

console.log(rog[ast]); //{ [Symbol()]: 'hello word' }


//用法2
let nb = Symbol();
let mnd = {
    [nb]: "hello word", //在将symbol 设置成属性名称需要使用 中括号包括  不然会变成字符串
}
console.log(mnd); //{ [Symbol()]: 'hello word' }

let s = {
    name: 1,
    v: 1,
    d: 1,
    c: 1,
}
console.log(Object.keys(s));