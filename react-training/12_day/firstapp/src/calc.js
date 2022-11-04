import { useState } from "react"

export function Calc() {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    const onNum1Change = (e) => {
        console.log(e.target.value)
        setNum1(e.target.value)
    }
    const onNum2Change = (e) => {
        console.log(e.target.value)
        setNum2(e.target.value)
    }

    const onAdd = () => {
        console.log(num1 + num2)
    }
    const onSub = () => {}
    const onMul = () => {}
    const onDiv = () => {}

    return (
        <>
            <div>
                <h1>Result Is </h1>
            </div>
            <div>
                <input type='text' placeholder="Number 1" onChange={onNum1Change}/>
                <input type='text' placeholder="Number 2" onChange={onNum2Change}/>
            </div>
            <div>
                <input type='button' value='Add' onClick={onAdd}/>
                <input type='button' value='Sub' onClick={onSub}/>
                <input type='button' value='Mul' onClick={onMul}/>
                <input type='button' value='Div' onClick={onDiv}/>
            </div>
        </>
    )
}