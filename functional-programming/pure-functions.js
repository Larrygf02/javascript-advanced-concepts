
const array = [1,2,3]

function mutateArray(arr) { // esta funciona afecta el exterior (array)
    arr.pop()
}

function mutateArray2(arr) {
    arr.forEach(element => {
       arr.push(1) 
    });
}

//mutateArray(array)
//mutateArray2(array)
//console.log(array) // array cambia

function removeLastItem(arr) {
    const newArray = [].concat(arr)
    newArray.pop()
    return newArray
}

function multiplyBy2(arr) {
    return arr.map(item => item*2)
}

console.log(removeLastItem(array))
console.log(multiplyBy2(array))
console.log(array) // array no cambia

