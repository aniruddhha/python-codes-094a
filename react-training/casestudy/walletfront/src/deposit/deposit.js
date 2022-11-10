import sty from './deposit.module.css'

export function Deposit() {

    return (
        <div>
            <h1> DEPOSIT </h1>
            <hr />

            <div className={sty.cont}>
                <label className={sty.txtFlt}>Amount</label>
                <input className={sty.bigIp} type='number' placeholder='Amount' />
            </div>
            <div>
                <input type='button' value='Deposit' />
            </div>
        </div>
    )
}