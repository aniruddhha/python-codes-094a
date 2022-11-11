import sty from './deposit.module.css'

export function Deposit() {

    return (
        <>
            <h1> DEPOSIT </h1>
            <hr />

            <div className={sty.mnCont}>
                <div className={sty.ipCont}>
                  <label className={sty.txtFlt}>Amount</label>
                    <input className={sty.bigIp} type='number' placeholder='Amount' /> 
                </div>
                <div className={sty.btnCont}>
                     <input className={sty.btn} type='button' value='DEPOSIT' /> 
                </div>
            </div>
        </>
    )
}