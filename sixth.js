
let a = [1, 2, 3]
let b = [4, 5, ...a]

console.log(b)  // [ 4, 5, 1, 2, 3 ]

let c = [..."Hello"]
console.log(c);  // [ 'H', 'e', 'l', 'l', 'o' ]



function testFunc(func) {
    func("aaa", "bbb", "ccc")
}

// 函数作为参数穿给另一个函数
testFunc(function(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
})

console.log("-----------------------------------");

// 箭头函数
testFunc((a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
})