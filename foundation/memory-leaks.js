// memory leak

// Evitar usar en tu codigo, ya que no se limpian en el garbage collection, y evitar la perdida de memoria
// global variable
var a = 1;
var b = 1;
var c = 1;

// event listeners
var element = document.getElementById('button')
element.addEventListener('click', onclick)

// set interval 
setInterval(() => {
    // reference objects
})

