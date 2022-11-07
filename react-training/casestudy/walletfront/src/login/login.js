import styles from './login.module.css'

export function Login() {

    console.log(styles)

    return (
        <div>
            <h4>Welcome Ecommerce Wallet</h4>  
            <input type='text' placeholder='Username'/>
            <input type='text' placeholder='Password'/>
            <input type='button' value='Login'/>
        </div>
    )
}