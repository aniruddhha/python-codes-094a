import styles from './login.module.css'

export function Login() {

    console.log(styles)

    return (
        <div className={styles.mainDiv}>
            <h2>Login</h2>
            <h5>Sign In to Continue</h5>
            <h4>Welcome Ecommerce Wallet</h4>  
            <div>
                <input type='text' placeholder='Username'/>
            </div>
            <div>
            <input type='text' placeholder='Password'/>
            </div>
            <input type='button' value='Login'/>
        </div>
    )
}