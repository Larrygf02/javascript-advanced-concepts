
function giveAccessTo(name) {
    return "Access to " + name + " is success"
}
function authenticate(verify) {
    let array = []
    for (let i=0; i<verify; i++) {
        array.push(i)
    }
    return true;
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
        fn(500)
    } else if (person.level === 'user') {
        fn(100)
    }
    return giveAccessTo(person.name)
}

console.log(letPerson({level: 'user', name: 'Tim'}, authenticate))

