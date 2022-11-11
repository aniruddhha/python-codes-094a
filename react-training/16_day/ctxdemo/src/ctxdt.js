import { useContext, useState } from "react"
import { AppCtx } from "./ctx"

export function CtxParent() {

    const [cnt, setCnt] = useState(0)

    const obj = { 
        dt : cnt,
        onInc : () => setCnt(cnt + 1)
    }

    return (
        <AppCtx.Provider value={obj}>
            <div>
                <ACtx/>
            </div>
            <div>
                <BCtx/>
            </div>
        </AppCtx.Provider>
    )
}

export function ACtx() {
    const ctx = useContext(AppCtx)

    return(
        <h1>
            Count is {ctx.dt}
        </h1>
    )
}

export function BCtx() {
    const ctx = useContext(AppCtx)

    return(
        <input type='button' value='Okay' onClick={ctx.onInc}/>
    )
}