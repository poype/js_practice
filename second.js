
// var变量的作用域是整个函数，let变量是块级作用域
// 下面演示的是var定义的变量，如果将var换成let会报错 “x is not defined”
function test_func(param) {

    console.log(x)  // undefined ，用var定义的变量，变量声明会提升到函数顶部，但变量的初始化仍在代码所在位置完成。

    if (param == 1) {
        var x = 100;
        console.log(x)  // 100
    }
    console.log(x)  // 100
}

test_func(1)


console.log("--------------解构赋值--------------");

let [x, y] = [100, 200]
console.log(x);  // 100
console.log(y);  // 200

[x, y] = [x+1, y+1]
console.log(x); // 101
console.log(y); // 201

// 解构赋值左侧变量的个数不一定与右侧数组中元素的个数相同
// 左侧多余的变量会被设置为undefined,而右侧多余的值会被忽略

// 在最后一个变量上加“...”，把所有未使用或剩余的值收集到一个变量中
let [i, ...j] = [1, 2, 3, 4]
console.log(i);  // 1
console.log(j);  // [ 2, 3, 4 ]

// 嵌套
let [a, [b, c]] = [1, [2, 2.5], 3]
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 2.5

// 解构赋值的右侧不是必须是数组，可以是任何可迭代的对象
let [l, m, ...n] = "hello"
console.log(l);  // h
console.log(m);  // e
console.log(n);  // [ 'l', 'l', 'o' ]

// 对象形式的解构赋值， 重点
let obj = {
    o: 88,
    p: 89,
    q: 90,
    t: 91
}
let {o, p, q} = obj
console.log(o);  // 88
console.log(p);  // 89
console.log(q);  // 90

// Math中还有好多其它属性，但那些没有提到名字的属性都被忽略了
const {sin, cos, tan} = Math;
console.log(sin);  // [Function: sin]
console.log(cos);  // [Function: cos]
console.log(tan);  // [Function: tan]
