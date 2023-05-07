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


// 针对对象o的任何修改操作，都只能影响o变量本身的值，而不会对o的原型链有任何影响
// 所以delete操作符只能删除自有属性，不能删除继承属性



// Object.assign()函数复制对象的属性
let o4 = {
    x: 1, 
    y: 2, 
    z: 3
}

let o5 = {
    z: 4, 
    s: 5,
    t: 6
}

let o6 = {}

Object.assign(o6, o4, o5)  // 把o4 和 o5对象中的属性都复制到o6中
console.log(o6);  // { x: 1, y: 2, z: 4, s: 5, t: 6 }
// o4 和 o5中都包含属性z，由于o5排在o4的后面，所以o6中z参数的值最终会与o5的一样



console.log(JSON.stringify(o6));  // {"x":1,"y":2,"z":4,"s":5,"t":6}

let json = '{"x":1,"y":2,"z":4,"s":5,"t":6}'
console.log(JSON.parse(json))     // { x: 1, y: 2, z: 4, s: 5, t: 6 }