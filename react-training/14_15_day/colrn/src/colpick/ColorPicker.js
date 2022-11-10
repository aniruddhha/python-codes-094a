import sty from './ColorPicker.module.css'

import { useState } from 'react'


export function ColorDisplay({ col }) {
    console.log(col)
    return (
        <div
            className={sty.colDv}
            style={{ backgroundColor: col }}>
        </div>
    )
}

export function FancyLabel(props) {
    return (
        <strong>{props.txt}</strong>
    )
}

export function ColorRange({ ttl, onCh, hd }) {

    // const onRedChanged = (e) => arr[1](Number.parseInt(e.target.value))

    return (
        <div className={sty.mr}>
            <FancyLabel txt={ttl} />
            <input type='range' min={0} max={255} onChange={onCh} value={hd}/>{hd}
        </div>
    )
}

export function ColorPicker() {

    const arr = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const onRedChanged = (e) => arr[1](Number.parseInt(e.target.value))
    const onGreenChanged = (e) => setGreen(Number.parseInt(e.target.value))
    const onBlueChanged = (e) => setBlue(Number.parseInt(e.target.value))

    return (
        <div className={sty.cont}>

            <ColorDisplay 
                col={`rgb(${arr[0]}, ${green}, ${blue})`} />

            <ColorRange 
                ttl='red' 
                onCh={onRedChanged} 
                hd={arr[0]}/>

            <ColorRange 
                ttl='green' 
                onCh={onGreenChanged} 
                hd={green}/>

            <ColorRange 
                ttl='blue' 
                onCh={onBlueChanged} 
                hd={blue}/>

            {

                /*<div 
                    className={sty.colDv} 
                    style = {{ backgroundColor :  `rgb(${arr[0]}, ${green}, ${blue})` }}> 
                </div>
             <div className={sty.mr}>
                Red <input type='range' onChange={onRedChanged}  min={0} max={255} value={arr[0]}/> {arr[0]}
            </div>
            <div className={sty.mr}>
                Green <input type='range' onChange={onGreenChanged} min={0} max={255} value={green}/> {green}
            </div>
            <div className={sty.mr}>
                Blue <input type='range' onChange={onBlueChanged} min={0} max={255} value={blue}/> {blue}
            </div> */}
        </div>
    )
}