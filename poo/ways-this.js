// new binding this
function Person(name, age) {
    this.name = name
    this.age = age
}

const person1 = new Person('juan', 12)
const person2 = new Person('josue', 13)
console.log(person1)

// implicit binding
const person = {
    name: 'karen',
    age: 40,
    hi: function() {
        console.log('hi ' + this.name)
    }
}

// explicit binding
// const person3 = {
//     name: 'mario',
//     age: 33,
//     hi: function() {
//         console.log('hi '+ this.setTimeout)
//     }.bind(window)
// }

// arrow functions
const person4 = {
    name: 'oscar',
    age: 45,
    hi: function() {
        var inner = () => {
            console.log('hi '+this.name)
        }
        return inner()
    }
}

person4.hi()