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
