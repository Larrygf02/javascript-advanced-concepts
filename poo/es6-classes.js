class Elf {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    attack() {
        return 'attach with ' + this.weapon
    }
}

const peter = new Elf('Peter', 'stones') // funcion elf funciona como constructor
console.log(peter.attack())
const sam = new Elf('sam', 'robots')
console.log(sam.attack())