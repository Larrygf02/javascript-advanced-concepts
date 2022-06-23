let user1 = {
    name: 'kin',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args))

function purchaseItem(...fns) {
    return fns.reduce(compose)
}

function addItemToCar(user, item) {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart})
}

function applyTaxToItems(user) {
    const {cart} = user;
    const taxRate = 1.03
    const updateCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart: updateCart})
}

function buyItem(user) {
    return Object.assign({}, user, {purchases: user.cart})
}

function emptyCar(user) {
    return Object.assign({}, user, {cart: []})
}

let user = purchaseItem(
    emptyCar,
    buyItem,
    applyTaxToItems,
    addItemToCar
)(user1,{name: 'laptop', price: 2000} )

console.log(user)