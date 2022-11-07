
import sty from './nav.module.css'
import imgLgt from './logout.png'

export function AppNav() {

    return (
        <nav>
            <span className={sty.rt}>Welcome Admin</span>

            <span className={sty.rt}>
                <span>2022-01-01</span>
                <span>
                    <img src={imgLgt}></img>
                </span>
            </span>
        </nav>
    )
}