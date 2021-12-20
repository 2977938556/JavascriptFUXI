let a = "我是12A模块的变量";

function Ashow() {
    console.log("我是12A模块的方法");
}


export {a,Ashow as defult}