let human = {
    mortal: true
}

let socrates = Object.create(human) // socrates hereda de obj human
socrates.age = 45
console.log(socrates.mortal)