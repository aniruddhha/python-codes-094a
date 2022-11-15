import { useEffect, useState } from "react"

import sty from './main.module.css'


export function CreateUser() {

    const ob1 = { ['abk'] : '134'  }
    const ob2 = { abk : '134' }


    const [user, setUser] = useState({
        user_name: "wow",
        "role": 0,
        "balance": 10,
        'is_active' : false,
        is_blocked : true
    })

    // const onUsCh = e => setUser( { ...user, user_name : e.target.value  }  )
    // const onPsCh = e => setUser( { ...user, password : e.target.value  }  )
    // const onRlCh = e => setUser( { ...user, role : e.target.value  }  )
    // const onBlCh = e => setUser( { ...user, balance : e.target.value  }  )

    const onIpCh = e => setUser( { ...user, [e.target.name] : e.target.value  } )

    const onClk = () => {

        console.log(user)

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
            <input name="user_name" type='text' placeholder='User Name' onChange={onIpCh}/>
            <input name="password" type='text' placeholder='Password' onChange={onIpCh}/>
            <select name="role" onChange={onIpCh}>
                <option value={0}>Admin</option>
                <option value={1}>User</option>
            </select>
            <input name="balance" type='number' placeholder='Balance' onChange={onIpCh}/>
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