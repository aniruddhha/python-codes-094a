import sty from './ColorPicker.module.css'

export function ColorPicker() {

    return(
        <div className={sty.cont}>
            <div className={sty.colDv}></div>
            <div className={sty.mr}>
                <input type='range'/>
            </div>
            <div className={sty.mr}>
                <input type='range'/>
            </div>
            <div className={sty.mr}>
                <input type='range'/>
            </div>
        </div>
    )
}