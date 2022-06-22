class Character {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    attack() {
        return 'attach with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon); // llama al constructor padre (Character)
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon)
        this.color = this.color
    }
    makeFort() {
        return "Strongest fort in the world made"
    }
}

const fiona = new Elf('Fiona', 'ninja stars', 'house')
console.log(fiona.__proto__)

const shrek = new Ogre('shrek', 'club', 'green')
shrek.makeFort()