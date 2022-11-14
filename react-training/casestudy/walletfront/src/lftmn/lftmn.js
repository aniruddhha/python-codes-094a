import { Link } from 'react-router-dom'
import sty from './lftmn.module.css'

export function LftMn() {

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

    return (
        <div className={sty.mn}>
           {customerMenuItems.map( itm => <Link to={itm.url}>{itm.ttl}</Link> )}
        </div>
    )
}