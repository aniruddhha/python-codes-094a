import sty from './lftmn.module.css'

export function LftMn() {

    const customerMenuItems = [ 
        { ttl : 'Balance', url : '' },
        { ttl : 'Deposit', url : '' }, 
        { ttl : 'Withdraw', url : '' }, 
        { ttl : 'Transfer', url : '' }, 
        { ttl : 'Logout', url : '' }, 
    ]

    const customerMenu = customerMenuItems.map( itm => <a href='#'>{itm.ttl}</a> )

    return (
        <div className={sty.mn}>
           {customerMenu}
        </div>
    )
}