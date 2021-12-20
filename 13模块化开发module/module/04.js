//导出有很多种方式 比如下面这种直接导出 一个变量
export let a = 1;

export function show() {
    console.log('我是单个导出的')
}


//除了以上这种单个导出的 还有下面这种可以导出多个对象的
let arr = [1, 2, 3, 4, 5, 6];

function hide() {
    console.log(arr.sort(function (a, b) {
        return b - a;
    })[0])
}

export {arr, hide};





