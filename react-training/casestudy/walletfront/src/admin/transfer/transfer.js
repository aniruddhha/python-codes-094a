import sty from './transfer.module.css'

import { useContext, useState } from 'react'
import { AppCtx } from '../../ctx/appctx'

export function AdminTransfer() {

    const ctx = useContext(AppCtx)

    const [src, setSrc] = useState()
    const [dst, setDst] = useState()
    const [amt, setAmt] = useState()

    const [srcDt, setSrcDt] = useState({
        user_name: '',
        balance: 0,
        is_active: false,
        is_blocked: true
    })
    const [dstDt, setDstDt] = useState({
        user_name: '',
        balance: 0,
        is_active: false,
        is_blocked: true
    })

    const [errs, setErrs] = useState('Invalid Data')

    const onSrcCh = e => setSrc(e.target.value)
    const onDstCh = e => setDst(e.target.value)
    const onAmtCh = e => setAmt(e.target.value)

    const onChkSrc = () => {
        fetch(`http://localhost:8000/wallet/${src}`)
            .then(res => {
                if (!res.ok) return Promise.reject(res)
                return res.json()
            }) // where we decide res ok not or okay
            .then(json => setSrcDt(json)) // if okay
            .catch(err => { }) // if not okay
    }

    const onChkDst = () => {
        fetch(`http://localhost:8000/wallet/${dst}`)
            .then(res => {
                if (!res.ok) return Promise.reject(res)
                return res.json()
            }) // where we decide res ok not or okay
            .then(json => setDstDt(json)) // if okay
            .catch(err => { }) // if not okay
    }

    const onTrans = () => {

        if(src == dst) {
            setErrs('Invalid Transfer')
            return
        }

        if(src <=0 ) {
            setErrs('Invalid Source Id')
            return
        }

        if(dst <= 0 ) {
            setErrs('Invalid Target Id')
            return
        }
        
        // if(!srcDt.is_active && srcDt.is_blocked) {
        //     setErrs('Source is blocked or inactive')

        //     return
        // }

        // if(!dstDt.is_active && dstDt.is_blocked) {
        //     setErrs('Target is blocked or inactive')
        //     return
        // }

        if(amt <= 0 || amt > 10_000_000) {
            setErrs('Invalid Amount')
            return
        }

        fetch('http://localhost:8000/transfer/transfer/', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                adm: ctx.st.id,
                src: src,
                dst: dst,
                amt: amt
            })
        })
            .then(res => {
                if (!res.ok) return Promise.reject(res)
                return res.json()
            }) // ok or not ok
            .then(json => console.log(json)) // ok
            .catch(err => {
                err.json().then( errObj => console.log(errObj))
            }) // not okay

    }

    return (
        <>
            <h1> TRANSFER </h1>
            <hr />

            <p>{ errs }</p>

            <div className={sty.cont}>
                <div className={sty.mnCont}>
                    <div className={sty.ipCont}>
                        <label className={sty.txtFlt}>Source</label>
                        <input className={sty.bigIp} type='number' placeholder='Source' onChange={onSrcCh} />
                    </div>
                    <div className={sty.btnCont}>
                        <input className={sty.btn} type='button' value='CHECK' onClick={onChkSrc} />
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
                            <td>{srcDt.is_blocked ? '❌' : '✅'}</td>
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
                            <td>{dstDt.is_blocked ? '❌' : '✅'}</td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div className={sty.mnCont}>
                    <div className={sty.ipCont}>
                        <label className={sty.txtFlt}>Amount</label>
                        <input className={sty.bigIp} type='number' placeholder='Amount' onChange={onAmtCh}/>
                    </div>
                    <div className={sty.btnCont}>
                        <input className={sty.btn} type='button' value='TRANSFER' onClick={onTrans} />
                    </div>
                </div>
            </div>
        </>
    )
}

