import { useState } from "react"

export function Menu() {

    const [isMob, setMob] = useState(true)

    const menu = isMob ? (
        <ul>
            <li> One </li>
            <li> Two </li>
            <li> Three </li>
        </ul>
    ) : (
        <ul>
            <li> Abc </li>
            <li> Pqr </li>
            <li> Lmn </li>
        </ul>
    )

    let ui;
    if (isMob) {
        ui = (
            <ul>
                <li> One </li>
                <li> Two </li>
                <li> Three </li>
            </ul>
        )
    }
    else {
        ui = (
            <ul>
                <li> Abc </li>
                <li> Pqr </li>
                <li> Lmn </li>
            </ul>
        )
    }

    return (
        <>
           {
            isMob && (
                <input type='button' value='Okay'/>
            )
           }
        </>
    )
}