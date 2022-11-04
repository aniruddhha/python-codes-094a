import { useState } from "react";

export function ListDemo() {
    const [names, setNames] = useState([
        'abc',
        'pwr',
        'lmn',
        'xyz',
        'tux',
        'ffr',
        'hhj'
    ])

    const ui = () => {
        let strs = []
        for(let i = 0; i< names.length; i++) {
           strs.push(<li>{names[i]}</li>)
        }
        return strs
    }

    return (
        <ul>
           {ui()}
        </ul>
    )

}