function loop() {
    for (var i=1; i<5; i++) {
        console.log(i)
    }
    console.log("final i", i)
}
//loop() // in this case the variable i is accesible 

function loopv2() {
    for (let i=1; i<5; i++) {
        console.log(i)
    }
    console.log("final i", i)
}

loopv2() // in this case the variable i is not accesible
