// #1
// Date object => to have a new method .lastYear() which shows you last year 'YYYY' format


// new Date('1990-10-10').lastYear()

Date.prototype.lastYear = function () {
    return this.getFullYear() - 1
}

console.log(new Date('1990-10-10').lastYear())

Array.prototype.map = function() {
    let data = []
    this.forEach(item => {
        data.push(`${item}**`)
    })
    return data
}
console.log([1,2,3].map())