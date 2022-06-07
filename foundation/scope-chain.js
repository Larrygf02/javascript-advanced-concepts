function sayName() {
    var a = 'a'
    return function findName() {
        var b = 'b';
        return function printName() {
            var c = 'c'
            return 'Raul'
        }
    }
}

console.log(sayName()) // function: findName
console.log(sayName()()) // function: printName
console.log(sayName()()()) // raul