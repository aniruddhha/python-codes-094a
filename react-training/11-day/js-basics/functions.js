function details(id) { // Named Function
    console.log(`Named Function`)
    return `Okay Number ${id}`
    // return 'Okay Number '+ id
}
details(12)

const onDeatils = function() { // anonymus function
    console.log(`Anonymous Function`)
}
onDeatils()

const makeSqaure = (num) => num * num // fat arrow -> lambda
console.log(`Square of 15 is ${makeSqaure(15)}`)