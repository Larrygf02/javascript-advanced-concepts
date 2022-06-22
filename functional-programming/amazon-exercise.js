let user1 = {
    name: 'kin',
    active: true,
    cart: [],
    purchases: []
}

// Implement a cart feature
// Add items to car
// Add 3% tax to item in cart
// Buy item: cart --> purchases
// Empty car

// Bonus
// Accept refunds
// Track user history
function addItemsToCar(user, item) {
    // check if valid item
    if (('name' in item) && ('price' in item)) {
        user.cart.push(item)
        return user
    } else {
        console.log('Invalid items')
        return user
    }
}

function addTaxToCar(cart) {
    let total;
    total = cart.map(item => item.price).reduce((price, price_next) => price + price_next)
    let tax = total * 0.03
    return tax 
}

function set_purchases(user) {
    let purchases = [];
    if (user.cart.length > 0) {
        let purchase = {}
        purchase.tax = addTaxToCar(user.cart)
        purchase.details = user.cart
        purchases.push(purchase)
        user.purchases = purchases
        user = emptyCart(user)
        return user
    } else {
        return "El carro esta vacio"
    }
}

function emptyCart(user) {
    user.cart = []
    return user
}

item1 = {
    name: 'lapiz',
    price: 12
}
item2 = {
    name: 'gas',
    price: 23
}

// add items
user1 = addItemsToCar(user1, item1)
user1 = addItemsToCar(user1, item2)
console.log(user1)
// purchases
user1 = set_purchases(user1)
console.log(user1)
