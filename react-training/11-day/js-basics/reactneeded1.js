function myData() {
    return [10, 20]
}

const dt = myData()
console.log(dt)

// es6
const ze = dt[0]
const fe = dt[1]
console.log(` ZE ${ze}`)
console.log(` FE ${fe}`)

const[z, f] = myData()
console.log(`z ${z}`)
console.log(`f ${f}`)

function pullData() {
    return {
        a : 10,
        b : 20
    }
}

const ob = pullData()
const aa = ob.a
const bb = ob.b

const { a, b } = pullData()