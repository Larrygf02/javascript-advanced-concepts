let cache = {}

function addTo80(n) {
    console.log("Long time")
    return n + 80
}

function cacheAddTo80(n) {
    if (n in cache) {
        console.log('return from cache')
        return cache[n]
    } else {
        cache[n] = addTo80(n)
    }
}

cacheAddTo80(20)
cacheAddTo80(20)
cacheAddTo80(20)
cacheAddTo80(20)