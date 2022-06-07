function two() {
    var isValid;
    console.log(`Function two: ${isValid}`)
}

function one() {
    var isValid = true;
    two()
    console.log(`Function one: ${isValid}`)
}
var isValid = false
one()
console.log(`Global execution: ${isValid}`)