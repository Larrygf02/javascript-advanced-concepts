const array = [1,2,3,4]
const double = []
array.forEach(item => double.push(item*2))
console.log(double)

// map
const arrayMap = array.map(item => item*2)
console.log(arrayMap)

// filter
const arrayFilter = array.filter(item => item > 3)
console.log(arrayFilter)

// reduce
const arrayReduce = array.reduce((a,b) => a + b)
console.log(arrayReduce)