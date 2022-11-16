import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppCtx } from '../ctx/appctx'
import sty from './lftmn.module.css'

export function LftMn() {

    const ctx = useContext(AppCtx)

    console.log(ctx)

    const customerMenuItems = [ 
        { ttl : 'Balance', url : './balance' },
        { ttl : 'Deposit', url : './deposit' }, 
        { ttl : 'Withdraw', url : './withdraw' }, 
        { ttl : 'Transfer', url : './transfer' }, 
        { ttl : 'Logout', url : '' }, 
    ]

    const adminMenuItems = [ 
        { ttl : 'Customers', url : '' },
        { ttl : 'Create Account', url : '' }, 
        { ttl : 'Balance', url : '' },
        { ttl : 'Deposit', url : '' }, 
        { ttl : 'Withdraw', url : '' }, 
        { ttl : 'Transfer', url : '' }, 
    ]

    const mn = (ctx.st.role == 1) ? adminMenuItems : customerMenuItems

    return (
        <div className={sty.mn}>
           {mn.map( itm => <Link to={itm.url}>{itm.ttl}</Link> )}
        </div>
    )
}