// 类型、值和变量

// JS中的原始类型包括：数字、字符串、布尔值、null、undefined、符号，注意字符串类型也属于原始类型。
// 除了这些类型的值，其它值都属于对象

// ########### 数字 ############

// 十六进制
console.log(0xFF);    // 255
// 二进制
console.log(0b10);    // 2
// 八进制
console.log(0o10);    // 8
// 浮点数
console.log(3.14E3)   // 3140, E3是10的三次方

// 除了 +、-、*、/ 外，ES2016还增加了 **
console.log(2 ** 2)   // 4
console.log(2 ** 3)   // 8
console.log(3 ** 2)   // 9

// Math 提供了多个数学函数
console.log(Math.sqrt(9))  // 3
console.log(Math.abs(-4))  // 4

// 在JS中除以0不会报错，结果是Infinity
console.log(1 / 0)   // Infinity
console.log(-1 / 0)  // -Infinity

// Number类
console.log(Number.MAX_VALUE)  // 1.7976931348623157e+308
console.log(Number.parseInt("33")) // 33

// NaN
console.log(Number.parseInt("BB"))  // NaN

// NaN与任何值都不相等，包括它自己
console.log(NaN === NaN) // false

// 无法精确表达0.1
console.log(0.3 - 0.2) // 0.09999999999999998


// BigInt表示任意精度整数，注意不能混用BigInt与常规数字
let x = BigInt(999999999999999) // 999999999999999n
let y = x * x * x * x * x;
console.log(y)
console.log(y / x)
console.log(y / x / x)
console.log(y / x / x / x)
console.log(y / x / x / x / x)  // 999999999999999n，BigInt类型的数字后面有一个n字母

console.log(100n) // BigInt字面量