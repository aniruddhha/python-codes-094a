const nm = 'abc'
const ver = 12
const msg = 'hello'


//tagged template literals
const st = `Name is ${nm} versio is ${ver} Message is ${msg}`
console.log(st)

function trans(stc, ...tags) {
    console.log(stc)
    console.log(tags)
}

trans`Name is ${nm} versio is ${ver} Message is ${msg}`
