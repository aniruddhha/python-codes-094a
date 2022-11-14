import { useEffect, useRef } from "react"

export function RefDemo({ num1, num2 }) {

    const refNm2 = useRef(null)

    useEffect(()=> {
        refNm2.current.focus()
        console.log(refNm2.current)
    }, []) 

    return (
        <div>
            <input type='text' placeholder={num1.toUpperCase()}/>
            <input type='text'  placeholder={num2.toUpperCase()} ref={refNm2}/>
        </div>
    )
}