let dragon = {
    name: 'Tania',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'kiki',
    fight() {
        return 1
    }
}

// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())
lizard.__proto__ = dragon // funciona como herencia "lizard" hereda todos los metodos de dragon
console.log(lizard.fight())