const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this) // this reference to the obj
        var anotherfunc = function() {
            console.log('b', this) // this not reference to the obj
        }
        anotherfunc()
    }
}

// obj.sing()


const otherobj = {
    name: 'Raul',
    sing() {
        console.log('a', this) //this reference to the obj
        var anotherfunc = () => {
            console.log('b', this) // this reference to the obj
        }
        anotherfunc()
    }
}

otherobj.sing()