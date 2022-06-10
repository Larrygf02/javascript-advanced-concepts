arr = [5, true, 'To be or not to be', undefined, null, Symbol('just me'), {}]

for (let i=0; i<arr.length; i++) {
    console.log(arr[i], " is type: " , typeof arr[i])
}

// array
let countries = ['Peru', 'Alemania']
console.log(Array.isArray(countries))
