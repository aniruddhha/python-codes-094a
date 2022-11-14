import { useEffect, useRef } from "react"

export function RefDemo() {

    const refNm2 = useRef(null)

    useEffect(()=> {
        refNm2.current.focus()
        console.log(refNm2.current)
    }, []) 

    return (
        <div>
            <input type='text' placeholder="Num1"/>
            <input type='text'  placeholder="Num2" ref={refNm2}/>
        </div>
    )
}