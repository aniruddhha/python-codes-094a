export function giveMeObj() {

    return {
        a : 1, 
        b : 2
    }
}

export function giveMeNullObj() {

    return null
}

export function getMeNumber() {
    return 10
}

export function getMeString() {
    return 'abc is abc and not pqr'
}

export function getMeException(num) {
    if(num > 50) throw new Error('Bad Data')

    return num
}