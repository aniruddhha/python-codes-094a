const names = ['abc', 'pqr', 'lmn', 'xyz']
// find out position of given string
// ip : pqr
// op : 2

function givePosition(nm) {
    
    for ( let i = 0; i < names.length; i++) {
        if( nm == names[i]) {
            return i + 1
        }
    }

    return -1
}

console.log(`Position is ${givePosition('pqr')}`)
console.log(`Position is ${givePosition('kjfdhjk')}`)