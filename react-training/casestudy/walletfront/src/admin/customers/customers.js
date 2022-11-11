import sty from './customers.module.css'

export function Customers() {

    const custs = [
        { sr : 1, username : 'abx', isBlk : true, isAct : true },
        { sr : 2, username : 'puy', isBlk : false, isAct : true },
        { sr : 3, username : 'crt', isBlk : true, isAct : false },
        { sr : 4, username : 'vty', isBlk : false, isAct : false },
        { sr : 5, username : 'vrt', isBlk : false, isAct : true },
    ]

    const custsTds = custs.map( cst => (
        <tr>
            <td className={sty.cntAln}>{cst.sr}</td>
            <td className={sty.lftAln}>{cst.username}</td>
            <td className={sty.cntAln}>{cst.isBlk ? '❌' : '✅'}</td>
            <td className={sty.cntAln}>{cst.isAct ? '❌' : '✅'}</td>
        </tr>
    ))

    return (
        <div>
            <div>
                <h1> All Customers</h1>
            </div>
            <div>
                <table>
                    <tr>
                        <th className={sty.cntAln}>Sr</th>
                        <th className={sty.lftAln}>Username</th>
                        <th className={sty.cntAln}>Block</th>
                        <th className={sty.cntAln}>Active</th>
                    </tr>
                    {/* <tr>
                        <td className={sty.cntAln}>1</td>
                        <td className={sty.lftAln}>Abc</td>
                        <td className={sty.cntAln}>✅</td>
                        <td className={sty.cntAln}>❌</td>
                    </tr> */}

                    { custsTds }
                </table>
            </div>
        </div>
    )
}