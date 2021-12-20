let b = "我是12B模块的变量";

function Bshow() {
    console.log("我是12B模块的方法");
}


export {b,Bshow as defult}