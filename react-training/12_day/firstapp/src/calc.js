import { useState } from "react"

export function Calc() {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [res, setRes] = useState(0)

    const onNum1Change = (e) => {
        const n1 = Number.parseInt(e.target.value)
        if(isNaN(n1) ) setNum1(0)
        else setNum1(n1)
    }
    const onNum2Change = (e) => {
        const n2 = Number.parseInt(e.target.value)
        if(isNaN(n2) ) setNum2(0)
        else setNum2(n2)
    }

    const onAdd = () => {
       setRes(num1 + num2)
    }
    const onSub = () => setRes(num1 - num2)
    const onMul = () =>  setRes(num1 * num2)
    const onDiv = () =>  setRes(num1 / num2)

    return (
        <>
            <div>
                <h1>Result Is {res}</h1>
            </div>
            <div>
                <input type='number' placeholder="Number 1" onChange={onNum1Change}/>
                <input type='number' placeholder="Number 2" onChange={onNum2Change}/>
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