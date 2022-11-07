import React, { useState } from "react"

export function Car(props) {
    const [st, setSt] = useState(0)
    console.log(props)

    return(
        <>
            <h1>Car Name : {props.name}</h1>
            <h1>Car Price : {props.price}</h1>
            <h1>Car Make : {props.make}</h1>
            <h1>Car Model : {props.model}</h1>
            {props.children}
        </>
    )
}

export function Item({ ag, sal }) {

    ag = 90
    
    return (
        <>
            <h1> Age {ag} </h1>
            <h1> Sal {sal} </h1>
        </>
    )
}