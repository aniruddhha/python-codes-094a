import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'

import { AppCtx } from '../ctx/appctx'

export function Login() {

    const ctx = useContext(AppCtx)

    const [errMsg, setErrMsg] = useState( { sts : true, msg : 'Invalid Form'})

    const [creds, setCreds] = useState({
        user_name: '',
        password: ''
    })

    const [er, setEr] = useState({ usNm: true, pass: true })

    useEffect(() => {
        setEr({
            usNm: creds.user_name.length < 3,
            pass: creds.password.length < 3
        })
        setErrMsg( { sts : false, msg : 'Invalid Form'})
    }, [creds])

    const onIpCh = e => setCreds({ ...creds, [e.target.name]: e.target.value })

    const navigate = useNavigate()

    const onClkLogin = () => {

        if (Object.values(er).every(el => el == false)) {

            fetch('http://localhost:8000/auth/login/creds/', {
                method: 'post',
                body: JSON.stringify(creds),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            .then( res =>  {
                if(!res.ok) return Promise.reject(res)
                return res.json() 
            })
            .then(json => {
                ctx.setSt(json.dt)
                navigate('/dash')
            })
            .catch( errRes => {
                errRes.json().then( e => {
                    console.log(e)
                   setErrMsg({ sts : true, msg :  e.err.non_field_errors[0]})
                } )
            })
        } else {
            setErrMsg( { sts : false, msg : 'Invalid Form'})
        }
    }

    return (
        <div className={styles.mainDiv}>
            <span className={styles.ttl}>Login</span>
            <span className={styles.txt}>Sign In to Continue</span>

            <div className={styles.uipDv}>
                <label className={styles.txt}>UserName</label>
                <input name='user_name' className={styles.bigIp} type='text' placeholder='Username' onChange={onIpCh} />
                {er.usNm && (<span className={styles.err}> Invalid Username</span>)}
            </div>
            <div className={styles.uipDv}>
                <label className={styles.txt}>Password</label>
                <input name='password' className={styles.bigIp} type='text' placeholder='Password' onChange={onIpCh} />
                {er.pass && (<span className={styles.err}> Invalid Password</span>)}
            </div>
            <input className={styles.btnLgn} type='button' value='Login' onClick={onClkLogin} />

            {(er.usNm || er.pass || errMsg.sts) && <span className={styles.alert}>{errMsg.msg}</span>}
        </div>
    )
}