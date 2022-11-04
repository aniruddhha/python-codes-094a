import { useState } from "react"
// first hook, i.e. useState

export function Box() {

    const [col, setCol] = useState('red')
    // array destructuring
    // useState returns an array
    // col -> 0th element of array -> variable
    // setCol -> 1st element of array -> function for changing value of var

    const onClk = () => {
        // col = 'yellow' // until u re-render, i will not update it
        console.log(col)

        setCol('yellow') // component rerenders
    }

    return (
        <div>
            <div className='box' style={{ backgroundColor: col }}></div>
            <input type='button' value='Okay' onClick={onClk} />
        </div>
    )
}