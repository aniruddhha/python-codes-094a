
import { useState } from "react"

export function ParentComp () {

    const [cnt, setCnt] = useState(0)

    const onInc = () => setCnt(cnt + 1)

    return (
        <>
            <div>
                <AComp cnt={cnt}/> { /* const props = { cnt : 0  } */}
            </div>
            <div>
                <BComp onInc={onInc}/>
            </div>
        </>
    )
}

export function AComp(props) {
    return (
        <h1>
            Count In {props.cnt}

         
        </h1>
    )
}

export function BComp({ onInc }) {

    return (
        <input type='button' value='Okay' onClick={onInc}/>
    )
}