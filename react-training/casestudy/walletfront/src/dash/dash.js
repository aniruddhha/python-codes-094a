import {AppNav} from '../nav/nav'
import { LftMn } from '../lftmn/lftmn'
import { Deposit } from '../customer/deposit/deposit'

import sty from './dash.module.css'
import { Customers } from '../admin/customers/customers'

export function Dash() {

    return (
        <>
            <AppNav />
            <div className={sty.dvMn}>
                <div className={sty.dvLftMn}>
                    <LftMn/>
                </div>
                <div className={sty.dvMnCnt}>
                    <Customers/>
                </div>
            </div>
        </>
    )
}