const arr = [1 , 2, 4]

arr.map( el => el * 2 ) // hof -> accepts function as argument

// The functions that use other functions as arguments or 
// return functions are named higher-order functions

const pull = () => {

    const a = 10
    console.log('doing business logic')

    return () => {
        return a
    }
}

const inner = pull()
inner()

pull()()