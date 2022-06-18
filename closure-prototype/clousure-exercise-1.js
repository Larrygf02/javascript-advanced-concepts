
function initialize() {
    view = '*'
    console.log("view has been set")
    return function () {
        return view
    }
}

getInitialize = initialize()
getInitialize()
getInitialize()
getInitialize()
getInitialize()