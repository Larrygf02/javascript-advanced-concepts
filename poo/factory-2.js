const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions) // hereda lo del objeto elfunctions
    newElf.name = name
    newElf.weapon = weapon
    return newElf
}

const peter = createElf('Peter', 'stones')
const dragon = createElf('Sam', 'water') // en esta parte se reusa la funcion elfFunctions
