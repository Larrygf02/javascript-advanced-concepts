// given an array = [2,3,5,6,2,3]
// it should return 2, first element recurrent

function get_first_recurrent(array) {
    repetitions = {}
    for (item of array) {
        if (item in repetitions) {
            repetitions[item] += 1
            return item
        } else {
            repetitions[item] = 1
        }
    }
    return undefined
}

console.log(get_first_recurrent([2,1,3,4,3,1]))