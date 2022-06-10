// who called me ?
function importantPerson() {
    console.log(this.name + "!")
}

const name = "Raul"

const obj1 = {
    name: "Juana",
    importantPerson: importantPerson
}

const obj2 = {
    name : "yeli",
    importantPerson: importantPerson
}

importantPerson() // return Raul! - undefined
obj1.importantPerson() // return Juana!
obj2.importantPerson() // return yeli!