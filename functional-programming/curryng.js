// currying
const multiply = (a,b) => a*b
const curriedMultiply = (a) = (b) => a*b
const curriedMultiply5 = curriedMultiply(5)

// 10 years
//curriedMultiply5(4)
//curriedMultiply5(6)

// partial application
const multiply2 = (a,b,c) => a*b*c
const partialMultiply = multiply2.bind(null, 5)
console.log(partialMultiply(4,10))