import {AppNav} from '../nav/nav'
import { LftMn } from '../lftmn/lftmn'

import sty from './dash.module.css'

export function Dash() {

    return (
        <>
            <AppNav />
            <div className={sty.dvMn}>
                <div className={sty.dvLftMn}>
                    <LftMn/>
                </div>
                <div className={sty.dvMnCnt}></div>
            </div>
        </>
    )
}