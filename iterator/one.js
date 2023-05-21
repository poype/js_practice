
// "..."操作符能够展开可迭代对象
let charArray = [..."abc"]
console.log(charArray instanceof Array); // true
console.log(charArray)  // [ 'a', 'b', 'c' ]


// 创建一个可迭代对象的类，可迭代对象必须包含一个名字是Symbol.iterator的方法，该方法返回一个iterator对象
// iterator对象则一定包含一个next方法，返回下一个值value
// 那怎么判断迭代终止呢？当在next方法返回的value值包含done属性且其值为true时，就表示迭代终止了
class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    hax(x) {
        return typeof x === "number" && this.from <= x && this.to >= x;
    }

    toString() {
        return `{x | ${this.from} <= x <= ${this.to}}`;
    }

    // 返回迭代器的函数名字固定是“Symbol.iterator”
    [Symbol.iterator]() {
        let next = Math.ceil(this.from)
        let last = this.to
        return {

            next() {
                return (next <= last) ? {value: next++} : {done: true};
            },

            // 让迭代器本身也可迭代
            [Symbol.iterator]() {
                return this;
            }
        }
    }
}

let range = new Range(10, 20)
// 迭代range对象
for(let x of range) {
    console.log(x)
}
// 从10到20
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

console.log("--------------------可迭代对象本质上的迭代方式-----------------------")

let iterator = range[Symbol.iterator]()
let nextValue = iterator.next()
while(!nextValue.done) {
    console.log(nextValue.value)
    nextValue = iterator.next()
}
