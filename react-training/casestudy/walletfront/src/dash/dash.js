import {AppNav} from '../nav/nav'
import { LftMn } from '../lftmn/lftmn'
import { Deposit } from '../customer/deposit/deposit'

import sty from './dash.module.css'
import { Customers } from '../admin/customers/customers'
import { Outlet } from 'react-router-dom'
import { Transfer } from '../admin/transfer/transfer'
import { AppCtx } from '../ctx/appctx'
import { useContext } from 'react'

export function Dash() {

    const ctx = useContext(AppCtx)

    console.log(ctx.st)

    return (
        <>
            <AppNav />
            <div className={sty.dvMn}>
                <div className={sty.dvLftMn}>
                    <LftMn/>
                </div>
                <div className={sty.dvMnCnt}>
                  <Outlet/>
                </div>
            </div>
        </>
    )
}