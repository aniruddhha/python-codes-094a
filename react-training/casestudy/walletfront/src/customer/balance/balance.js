import sty from './balance.module.css'

export function Balance() {
    return (
        <>
            <h1> BALANCE </h1>
            <hr />

            <div className={sty.mnCont}>
               
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
        </>
    )
}