// constructor function 
function elf(name, weapon) {
    this.name = name
    this.weapon = weapon
}

const peter = new elf('Peter', 'stones') // funcion elf funciona como constructor
const sam = new elf('sam', 'robots')

console.log(sam.name)