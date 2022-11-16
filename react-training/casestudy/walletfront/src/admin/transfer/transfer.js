import sty from './transfer.module.css'

import { useState } from 'react'

export function AdminTransfer() {
    const [src, setSrc] = useState()
    const [dst, setDst] = useState()

    const [srcDt, setSrcDt] = useState({ 
        user_name : '',
        balance : 0,
        is_active : false,
        is_blocked : true
     })
    const [dstDt, setDstDt] = useState({ 
        user_name : '',
        balance : 0,
        is_active : false,
        is_blocked : true
     })

    const onSrcCh = e => setSrc(e.target.value)
    const onDstCh = e => setDst(e.target.value)

    const onChkSrc = () => {
        fetch(`http://localhost:8000/wallet/${src}`)
        .then(res => {
            if(!res.ok) return Promise.reject(res)
            return res.json()
        }) // where we decide res ok not or okay
        .then( json => setSrcDt(json) ) // if okay
        .catch(err => {}) // if not okay
    }
    const onChkDst = () => {
        fetch(`http://localhost:8000/wallet/${dst}`)
        .then(res => {
            if(!res.ok) return Promise.reject(res)
            return res.json()
        }) // where we decide res ok not or okay
        .then( json => setDstDt(json)  ) // if okay
        .catch(err => {}) // if not okay
    }

    return (
        <>
            <h1> TRANSFER </h1>
            <hr />

            <div className={sty.cont}>
                <div className={sty.mnCont}>
                    <div className={sty.ipCont}>
                        <label className={sty.txtFlt}>Source</label>
                        <input className={sty.bigIp} type='number' placeholder='Source' onChange={onSrcCh}/>
                    </div>
                    <div className={sty.btnCont}>
                        <input className={sty.btn} type='button' value='CHECK' onClick={onChkSrc}/>
                    </div>

                    <div className={sty.ipCont}>
                        <label className={sty.txtFlt}>Target</label>
                        <input className={sty.bigIp} type='number' placeholder='Target' onChange={onDstCh} />
                    </div>
                    <div className={sty.btnCont}>
                        <input className={sty.btn} type='button' value='CHECK' onClick={onChkDst} />
                    </div>
                </div>
                <div className={sty.tbCont}>
                    <table>
                        <tr>
                            <td>USERNAME</td>
                            <td>{srcDt.user_name}</td>
                        </tr>
                        <tr>
                            <td>BALANCE</td>
                            <td>{srcDt.balance}</td>
                        </tr>
                        <tr>
                            <td>ACTIVE</td>
                            <td>{srcDt.is_active ? '✅' : '❌'}</td>
                        </tr>
                        <tr>
                            <td>UNBLOCKED</td>
                            <td>{srcDt.is_blocked ? '❌' : '✅' }</td>
                        </tr>
                    </table>

                    <table >
                        <tr>
                            <td>USERNAME</td>
                            <td>{dstDt.user_name}</td>
                        </tr>
                        <tr>
                            <td>BALANCE</td>
                            <td>{dstDt.balance}</td>
                        </tr>
                        <tr>
                            <td>ACTIVE</td>
                            <td>{dstDt.is_active ? '✅' : '❌'}</td>
                        </tr>
                        <tr>
                            <td>UNBLOCKED</td>
                            <td>{dstDt.is_blocked ? '❌' : '✅' }</td>
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

