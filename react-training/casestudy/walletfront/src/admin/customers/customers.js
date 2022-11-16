import sty from './customers.module.css'

import { useEffect, useState } from 'react'

export function Customers() {

    const [custs, setCusts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/wallet/')
            .then(res => res.json())
            .then(json => setCusts(json))
            .catch( err => console.log(err) )
    }, [])

    const custsTds = custs.map(cst => (
        <tr key={cst.id}>
            <td className={sty.cntAln}>{cst.id}</td>
            <td className={sty.lftAln}>{cst.user_name}</td>
            <td className={sty.lftAln}>{cst.balance}</td>
            <td className={sty.cntAln}>{cst.is_active ? '❌' : '✅'}</td>
            <td className={sty.cntAln}>{cst.is_blocked ? '❌' : '✅'}</td>
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
                        <th className={sty.cntAln}>ID</th>
                        <th className={sty.lftAln}>Username</th>
                        <th className={sty.cntAln}>Balance</th>
                        <th className={sty.cntAln}>Active</th>
                        <th className={sty.cntAln}>Blocked</th>
                    </tr>
                    {/* <tr>
                        <td className={sty.cntAln}>1</td>
                        <td className={sty.lftAln}>Abc</td>
                        <td className={sty.cntAln}>✅</td>
                        <td className={sty.cntAln}>❌</td>
                    </tr> */}

                    {custsTds}
                </table>
            </div>
        </div>
    )
}