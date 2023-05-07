// prototype 和 constructor 这两个引用间的关系
console.log(Object.prototype.constructor);  // [Function: Object]
console.log(Object.prototype.constructor === Object)  // true


// Object.create函数创建对象时可以指定原型
let o1 = Object.create({x:1, y:2}) // o1继承了x和y两个属性 
console.log(o1.x);  // 1
console.log(o1.y);  // 2

let o2 = Object.create(null)  // 没有继承任何原型，所以连toString方法都没有
console.log(o2.toString);  // undefined

let o3 = Object.create(Object.prototype)  // 相当于 new Object() 或 {}
console.log(o3.toString);  // [Function: toString]