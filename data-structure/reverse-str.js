
function reverse(word) {
    let letters = []
    for (let letter of word) {
        letters.push(letter)
    }
    letters = letters.reverse()
    word_reverse = ""
    for (let letter of letters) {
        word_reverse += letter
    }
    return word_reverse
    
}
word = 'hola, como estas'
console.log(reverse(word))


