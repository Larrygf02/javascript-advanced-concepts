// HOF
const hof = (fn) => fn(5)
hof(function a(x) { return x})

// Clousure
const closure = function() {
    let count = 0
    return function increment() {
        count++;
        return count;
    }
}

const incrementFn = closure() 
console.log(incrementFn())
console.log(incrementFn())
console.log(incrementFn())