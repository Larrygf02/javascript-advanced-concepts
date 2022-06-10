let a = 5;
let b = a;
b+=1;
console.log(a)

let c = [1,2,3,4]
let d = c; // el arreglo es un objeto, por lo tanto se pasa por referencia
d.push(5)
console.log(c)

let data = [1,2,3,4]
let new_data = [].concat(data) // copy array by value
new_data.push(5)
console.log(data)

let obj = {a: 'a', b: 'b', c: 'c'}
let clone_obj = Object.assign({}, obj) // copy obj by value
let other_clone = {...obj} // copy obj by value
clone_obj.c =6
console.log(obj)

// obj with other obj
let v = {
    a: {
        deep: 'copy'
    },
    b: 2
}

let clone = {...v}
clone.a.deep = 'other copy' // in this case deep will modify in object v
console.log(v)

let superClone = JSON.parse(JSON.stringify(v))
superClone.a.deep = 'try copy'
console.log(v)