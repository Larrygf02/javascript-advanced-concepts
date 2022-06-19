const elf = {
    name: 'Orwel',
    weapon: 'bow',
    attack() {
        return 'attach with ' + elf.weapon
    }
}

console.log(elf.attack())

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attach with ' + weapon
        }
    }
}

const peter = createElf('Peter', 'stones')
const dragon = createElf('Sam', 'water')

// el problema con este es que si creamos 1000 elfos se crearan 1000 funciones attack