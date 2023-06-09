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


// ########### Data类型 ###########
console.log(new Date())   // UTC时间
console.log(Date.now())   // 1683296996479


// ########### 字符串类型 ###########

console.log("This is a string")        // 双引号
console.log('This is another string')  // 单引号
console.log("I'm a good boy")          // 双引号中可以包含单引号
console.log('test for "')              // 单引号中可以包含双引号

// 反引号字符串
let paragraph = `
one line
  two line
            three line        space
                         end
`
console.log(paragraph)

// 字符串的一些API，JS中的字符串是不可以被修改的
let s = "abcdefg"
console.log(s.length)   // 7
console.log(s.substring(3))    // defg
console.log(s.substring(3,5))  // de
console.log(s.indexOf("d"))  // 3
console.log(s.replace('b', 'w'))  // awcdefg
console.log(s.toUpperCase())  // ABCDEFG
console.log(s.charAt(3))   // d

// 反引号定义模板字符串
let person = "Bill"
let greeting = `Hello ${person}`
console.log(greeting)      // Hello Bill

let sum = 1 + 2
let calculation = `1 + 2 = ${sum}`
console.log(calculation)   // 1 + 2 = 3



// JS中的假值: false, undefined, null, 0, NaN, ""

// 布尔值的toString方法
console.log(true.toString())
console.log(false.toString())


let b = false

console.log(typeof(s))    // string
console.log(typeof(sum))  // number
console.log(typeof(b))    // boolean
console.log(typeof(null)) // object


// ########### 符号可以作为对象的属性名 ############
// 在ES6之前，对象的属性名只能是字符串，从ES6开始，符号也可以作为对象的属性名。
let symname = Symbol("propname")
console.log(symname)    // Symbol(propname)

let o = {}
o[symname] = 123
console.log(o);         // { [Symbol(propname)]: 123 }
console.log(o[symname]) // 123

// 要获取一个Symbol值，需要调用Symbol()函数。这个函数永远不会返回相同的值，即使每次传入的参数都一样。
// 这意味着可以将调用Symbol函数取得的符号值安全地用于为对象添加新属性，而无需担心可能会重写已有的同名属性。
let sym_1 = Symbol("test")
let sym_2 = Symbol("test")
console.log(sym_1 == sym_2) // false

console.log(sym_1.toString());  // Symbol(test)

// 用相同的字符串调用Symbol.for()函数时，会一直返回相同的符号值
let sym_3 = Symbol.for("shared")
let sym_4 = Symbol.for("shared")
console.log(sym_3 === sym_4);  // true

// 通过keyFor函数可以获取构建符号值的字符串
console.log(Symbol.keyFor(sym_3))  // shared



// 全局对象
// 在Node中，全局对象有一个名为global的属性，global属性指向全局对象本身，因此Node程序可以通过global引用全局对象本身
// 浏览器中的全局对象是Window，它有一个自引用队属性window，通过window可以引用全局对象。
// ES2020定义了globalThis作为在任何环境中引用全局对象的标准方式。
console.log(globalThis == global)  // true


// 类型自动转换
// 如果JS想要字符串，它就会把你提供的任何值都转为字符串。
// 如果JS想要数字，它也会尝试把你提供的值转为一个数字，如果无法转为一个有效数字就转为NaN。
console.log("7" * "4")  // 28
console.log(1 - "x")  // NaN
console.log(NaN + " objects")  // NaN objects


// 显示类型转换： Boolean(), Number(), String()
console.log(Number("13"))  // 13
console.log(String(false)); // false
console.log(Boolean({}));  // true