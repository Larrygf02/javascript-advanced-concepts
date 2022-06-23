
const compose = (f,g) => (data) => f(g(data))
const pipe = (f,g) => (data) => g(f(data))

const multiplyBy3 = (num) => num*3
const makePositive = (num) => Math.abs(num)
const composed = compose(multiplyBy3, makePositive)
console.log(composed(-2))