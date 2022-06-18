// memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill("a")
    console.log('Created')
    return bigArray[index]
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)

function heavyDutyv2(index) {
    const bigArray = new Array(7000).fill("a")
    console.log('created 2')
    return function (index) {
        return bigArray[index]
    }
}
const getheavyDuty = heavyDutyv2()
getheavyDuty(688)
getheavyDuty(700)
getheavyDuty(800)
// encapsulation