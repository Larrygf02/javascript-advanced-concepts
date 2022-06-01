// call stack + memory heap
const number = 610; // allocate memory for number
const string = 'some text'; // allocate memory for string
const human = { // allocate memory for an object
    fist: 'Andrei',
    last: 'Negaie'
}

function substractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return substractTwo(sumTotal);
}

calculate()
