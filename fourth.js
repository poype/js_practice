// for...in 遍历的是对象的key，in后面可以接任何对象
let obj = {
    a: 1,
    b: 2, 
    c: 3
}

let array = ["a", "b", "c", "d", "e"]

let s = "opqrst"

for(let item in obj) {
    console.log(item);  // a, b, c
}

for (let item in array) {
    console.log(item);  // 0, 1, 2, 3, 4
}

for (let item in s) {
    console.log(item);  // 0, 1, 2, 3, 4, 5， 字符在字符串中的index
}

// for...of遍历的是对象的 value
for (let item of array) {
    console.log(item);  // a, b, c, d, e
}

// 但for...of只能用于可迭代对象，不能直接用于遍历普通对象
// 下面代码会报错： TypeError: obj is not iterable
// for(let item of obj) {
//     console.log(item);
// }

// for...of 遍历对象的value
for(let item of Object.values(obj)) {
    console.log(item);  // obj对象的值： 1, 2, 3
}
// for...of 遍历对象的key
for(let item of Object.keys(obj)) {
    console.log(item);  // obj对象的key： a, b, c
}
// for...of 遍历对象的entry, Object.entries返回的是一个数组的数组
for(let item of Object.entries(obj)) {
    console.log(item);  // obj对象的entry： [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ]
}

// for...of 遍历字符串中的每个字符
for(let item of s) {
    console.log(item); // o, p, q, r, s, t
}
