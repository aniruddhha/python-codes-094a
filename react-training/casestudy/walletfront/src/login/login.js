import styles from './login.module.css'

export function Login() {

    console.log(styles)

    return (
        <div className={styles.mainDiv}>
            <span className={styles.ttl}>Login</span>
            <span className={styles.txt}>Sign In to Continue</span>
            
            <div className={styles.uipDv}>
                <label className={styles.txt}>UserName</label>
                <input className={styles.bigIp} type='text' placeholder='Username'/>
            </div>
            <div className={styles.uipDv}>
                <label className={styles.txt}>Password</label>
                <input className={styles.bigIp} type='text' placeholder='Password'/>
            </div>
            <input className={styles.btnLgn} type='button' value='Login'/>
        </div>
    )
}