// in操作符,左侧操作数应该是字符串或符号，右侧是对象
// 如果左侧的值是右侧对象的属性名，则返回true，否则返回false

let key = Symbol("test key")

let obj = {
    x: 1, 
    y: 2
}

console.log("x" in obj);  // true
console.log("z" in obj);  // false
console.log(key in obj);  // false

obj[key] = 3
console.log(key in obj);  // true

let array = ["a", "b", "c"]
console.log(0 in array);  // true
console.log(2 in array);  // true
console.log(3 in array);  // false



// instanceof操作符
console.log(obj instanceof Object);    // true
console.log(obj instanceof Number);    // false
console.log(array instanceof Array);   // true
console.log(array instanceof Object);  // true
console.log(array instanceof Number);  // false

// 为了对表达式 o instanceof f 求值，JS会求值f.prototype，然后在 o 的原型链上查看是否有 f.prototype 这个值
// 如果找到了就返回true。如果 f.prototype 不是 o 原型链上的一个值，则o不是f的实例。