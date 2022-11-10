import sty from './withdraw.module.css'

export function Withdraw() {

    return (
        <>
            <h1> WITHDRAW </h1>
            <hr />

            <div className={sty.mnCont}>
                <div className={sty.ipCont}>
                  <label className={sty.txtFlt}>Amount</label>
                    <input className={sty.bigIp} type='number' placeholder='Amount' /> 
                </div>
                <div className={sty.btnCont}>
                     <input className={sty.btn} type='button' value='WITHDRAW' /> 
                </div>
            </div>
        </>
    )
}