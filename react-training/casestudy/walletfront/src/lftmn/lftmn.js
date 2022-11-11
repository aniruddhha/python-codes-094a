import sty from './lftmn.module.css'

export function LftMn() {

    const customerMenuItems = [ 
        { ttl : 'Balance', url : '' },
        { ttl : 'Deposit', url : '' }, 
        { ttl : 'Withdraw', url : '' }, 
        { ttl : 'Transfer', url : '' }, 
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
           {adminMenuItems.map( itm => <a href='#'>{itm.ttl}</a> )}
        </div>
    )
}