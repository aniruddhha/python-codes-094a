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

const arr = [2, 3, 5]

const resArr = []
for(let i = 0; i<arr.length; i++) {
    resArr.push(arr[i] * arr[i])
}

console.log(arr)
console.log(resArr)

const nwArr = arr.map( el => el * el )
console.log(nwArr)
const nwFlt = arr.filter( el => el > 2)
console.log(nwFlt)