import sty from './ColorPicker.module.css'

import { useState } from 'react'

export function ColorPicker() {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const onRedChanged = (e) => setRed(Number.parseInt(e.target.value))
    const onGreenChanged = (e) => setGreen(Number.parseInt(e.target.value))
    const onBlueChanged = (e) => setBlue(Number.parseInt(e.target.value))

    const obj = {
        backgroundColor : `rgb(${red}, ${green}, ${blue})`
    }

    return(
        <div className={sty.cont}>
            <div 
                className={sty.colDv} 
                style={{ backgroundColor : `rgb(${red}, ${green}, ${blue})` }}>

            </div>
            
            <div className={sty.mr}>
                Red <input type='range' onChange={onRedChanged}  min={0} max={255}/> {red}
            </div>
            <div className={sty.mr}>
                Green <input type='range' onChange={onGreenChanged} min={0} max={255}/> {green}
            </div>
            <div className={sty.mr}>
                Blue <input type='range' onChange={onBlueChanged} min={0} max={255}/> {blue}
            </div>
        </div>
    )
}