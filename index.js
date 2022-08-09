function receivesAFunction(cb){
    console.log(cb())
}


function returnsANamedFunction(){
    return function fct() {
        console.log('Hello!')
    }
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log('Hi!')
    }
}