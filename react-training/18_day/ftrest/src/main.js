import { useEffect, useState } from "react"

import sty from './main.module.css'

export function Main() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch('http://localhost:8000/wallet/')
            .then(res => res.json()) // convert response to josn
            .then(json => {
                setUsers(json)
            })
    }, [])

    return (
        <div className={sty.cont}>
            <table >
                <tr>
                    <th >Id</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Balance</th>
                    <th>Active</th>
                    <th>Blocked</th>
                </tr>
                {/* <tr>
                    <td >10</td>
                    <td>Maria Anders</td>
                    <td>Admin</td>
                    <td>18687</td>
                    <td>True</td>
                    <td>False</td>
                </tr> */}

                {
                    users.map( us => (
                        <tr>
                            <td>{us.id}</td>
                            <td>{us.user_name}</td>
                            <td>{us.role}</td>
                            <td>{us.balance}</td>
                            <td>{us.is_active ? '✅' : '❌'}</td>
                            <td>{us.is_blocked ? '✅' : '❌'}</td>
                        </tr>
                    ) )
                }
            </table>
        </div>
    )
}