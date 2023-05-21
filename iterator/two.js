
// 生成器函数在语法上类似常规函数，但使用的关键字是“function*”
// 调用生成器函数并不会执行函数体，而是返回一个iterator对象
// 调用这个iterator对象的next方法会导致生成器函数从头开始执行，直至遇到一个yield语句。即生成一个值。

// 质数生成器
function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

// 调用生成器函数获得一个iterator对象
let primeIterator = oneDigitPrimes();
for(let prime = primeIterator.next(); !prime.done; prime = primeIterator.next()) {
    console.log(prime.value)
}

// 执行效果与上面相同
for(let primeNumber of oneDigitPrimes()) {
    console.log(primeNumber)
}

