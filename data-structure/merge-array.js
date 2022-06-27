function mergeSortedArray(...args) {
    const parameters = [...args]
    const new_array = parameters.reduce((a,b) => a.concat(b))
    return new_array.sort()
}

console.log(mergeSortedArray([1], [2], [3,4], [5,1]))