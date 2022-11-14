import sty from './transfer.module.css'

export function Transfer() {

    return (
        <>
            <h1> TRANSFER </h1>
            <hr />

            <div className={sty.cont}>
                <div className={sty.mnCont}>
                    <div className={sty.ipCont}>
                        <label className={sty.txtFlt}>Source</label>
                        <input className={sty.bigIp} type='number' placeholder='Source' />
                    </div>
                    <div className={sty.btnCont}>
                        <input className={sty.btn} type='button' value='CHECK' />
                    </div>

                    <div className={sty.ipCont}>
                        <label className={sty.txtFlt}>Target</label>
                        <input className={sty.bigIp} type='number' placeholder='Target' />
                    </div>
                    <div className={sty.btnCont}>
                        <input className={sty.btn} type='button' value='CHECK' />
                    </div>
                </div>
                <div className={sty.tbCont}>
                    <table>
                        <tr>
                            <td>USERNAME</td>
                            <td>Abc</td>
                        </tr>
                        <tr>
                            <td>BALANCE</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>ACTIVE</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>UNBLOCKED</td>
                            <td>❌</td>
                        </tr>
                    </table>

                    <table >
                        <tr>
                            <td>USERNAME</td>
                            <td>Abc</td>
                        </tr>
                        <tr>
                            <td>BALANCE</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>ACTIVE</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>UNBLOCKED</td>
                            <td>❌</td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div className={sty.mnCont}>
                    <div className={sty.ipCont}>
                        <label className={sty.txtFlt}>Amount</label>
                        <input className={sty.bigIp} type='number' placeholder='Amount' />
                    </div>
                    <div className={sty.btnCont}>
                        <input className={sty.btn} type='button' value='TRANSFER' />
                    </div>
                </div>
            </div>
        </>
    )
}

