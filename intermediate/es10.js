const array = [1,2,3, [4,5]]
console.log(array.flat())

const array2 = [[1,2,[3]], 4, 5]
console.log(array2.flat(2))

console.log(array2.flatMap(item => item + 2))