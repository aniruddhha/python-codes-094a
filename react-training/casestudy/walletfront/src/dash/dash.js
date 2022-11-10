import {AppNav} from '../nav/nav'
import { LftMn } from '../lftmn/lftmn'
import { Deposit } from '../deposit/deposit'

import sty from './dash.module.css'
import { Withdraw } from '../withdraw/withdraw'
import { Balance } from '../balance/balance'

export function Dash() {

    return (
        <>
            <AppNav />
            <div className={sty.dvMn}>
                <div className={sty.dvLftMn}>
                    <LftMn/>
                </div>
                <div className={sty.dvMnCnt}>
                    <Balance/>
                </div>
            </div>
        </>
    )
}