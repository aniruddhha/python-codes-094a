import { useEffect, useState } from "react"

import sty from './main.module.css'


export function CreateUser() {

    const user = {
        user_name: "wow",
        "role": 0,
        "balance": 10,
        "is_active": false,
        "is_blocked": false
    }

    const onClk = () => {

        fetch('http://localhost:8000/wallet/', {
            method: 'post',
            body: JSON.stringify(user), // converts js object to json
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }

    return (
        <div className={sty.crtCont}>
            <input type='text' placeholder='User Name' />
            <input type='text' placeholder='Password' />
            <select>
                <option value={0}>Admin</option>
                <option value={1}>User</option>
            </select>
            <input type='number' placeholder='Balance' />
            <input type='button' value='Okay' onClick={onClk} />
        </div>
    )
}

export function UserTable() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/wallet/')
            .then(res => res.json()) // convert response to josn
            .then(json => {
                setUsers(json)
            })
    }, [])

    return (

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
                users.map(us => (
                    <tr>
                        <td>{us.id}</td>
                        <td>{us.user_name}</td>
                        <td>{us.role}</td>
                        <td>{us.balance}</td>
                        <td>{us.is_active ? '✅' : '❌'}</td>
                        <td>{us.is_blocked ? '✅' : '❌'}</td>
                    </tr>
                ))
            }
        </table>

    )
}
export function Main() {

    return (
        <div className={sty.cont}>
            <CreateUser />
            <UserTable />
        </div>
    )
}