// call()
function a() {
    console.log('hi')
}

// a.call() == a()

const wizard = {
    name: 'Merlin',
    health: 100,
    heal() {
        return this.health
    }
}
console.log(wizard.heal())

const archer = {
    name: 'Robin Hood',
    health: 30
}
function healv1(number) {
    return this.health += number
}

console.log(wizard.heal.call(archer)) // archer replace wizard
console.log(healv1.apply(wizard, [2])) // apply recibe arguments as a array
console.log(healv1.apply(archer, [2]))