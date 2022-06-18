const array = [1,2,3,4]

for (var i=0; i<array.length; i++) {
    setTimeout(function(){
        console.log('I am at the index' + i)
    }, 3000)
} // repeat the same index

for (let i=0; i<array.length; i++) {
    setTimeout(function(){
        console.log('I am at the index' + i)
    }, 3000)
} // different index
