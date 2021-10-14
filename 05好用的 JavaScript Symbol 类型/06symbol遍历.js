let paw = Symbol("我是密码")
let obj = {
        name: "张三",
        age: 18,
        grad: "男",
        [paw]: 123456
    }
    // console.log(obj);

//由于symbol 类型普通的遍历是遍历不出来结果的
//因此可以用于 排除密码的操作
console.log(Object.keys(obj)); //[ 'name', 'age', 'grad' ]



//序列化对象为字符串
let str = JSON.stringify(obj);
console.log(str); //{"name":"张三","age":18,"grad":"男"}

//将序列化字符串的对象转换成对象
console.log(JSON.parse(str));