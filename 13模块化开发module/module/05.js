let arr = [1, 2, 3, 4, 5, 6];

function show() {
    console.log('我被修改了名称')
}


export {
    arr as array,
    show as hide,
}
