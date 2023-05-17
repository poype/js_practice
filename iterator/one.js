
// "..."操作符能够展开可迭代对象
let charArray = [..."abc"]
console.log(charArray instanceof Array); // true
console.log(charArray)  // [ 'a', 'b', 'c' ]