const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked')
    } else {
        reject('Error, it broke')
    }
})

// promise.then(result => console.log(result))

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hola')
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Que tal')
})
Promise.all([promise, promise2, promise3])
    .then(values => {
        console.log(values)
    })