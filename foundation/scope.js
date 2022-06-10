// function scope
function a() {
    var data = 'x'
}
// console.log(data) //this return a error
// block scope
if (5 > 4) {
    var secret = 'x'
}
// console.log(secret) // this return x

if (5 > 4) {
    let secret = 'x'
}
// console.log(secret) // this return a error