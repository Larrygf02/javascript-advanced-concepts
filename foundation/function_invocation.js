function marry(person1, person2) {
    console.log(arguments) // arguments is only available in the function context
    return `${person1} is now married to ${person2}`
}

console.log(marry("juan", "juanita"))