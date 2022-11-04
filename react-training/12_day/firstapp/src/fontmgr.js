import { useState } from "react"
import  React from 'react'

export function FontMgr() {

    const [sz, setSz] = useState(30)

    const onInc = () => {
        setSz(sz + 1)
    }

    const onDec = () => {
        setSz(sz - 1)
    }

    return (
        <>
            <p style={{fontSize : sz + 'px'}}> Welcome to React </p>
            <div>
                <input type='button' value="Dec" onClick={onDec}/>
                <input type='button' value="Inc" onClick={onInc}/>
            </div>
        </>
    )
}

