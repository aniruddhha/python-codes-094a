import { useEffect, useState } from "react"

export function ToDoListItem({ task, isComplete }) {
    return (
        <li> {task}  {isComplete ? '✅' : '❌'}  </li>
    )
}

export function TodoList({ dt }) {

    const fullList = dt.map(el => <ToDoListItem task={el.task} isComplete={el.isComplete} />)

    return (
        <ul>
            {fullList}
        </ul>
    )
}

export function App() {


    const [dt, setDt] = useState(undefined)

    useEffect(() => {

        setTimeout(() => {

            setDt([
                { id: 1, task: 'abc', isComplete: 0 },
                { id: 2, task: 'pqr', isComplete: 0 },
                { id: 3, task: 'xyz', isComplete: 1 },
                { id: 4, task: 'nmt', isComplete: 1 },
                { id: 5, task: 'crt', isComplete: 1 }
            ])
        }, 3000)


    }, [])

    const ui = dt ? <TodoList dt={dt}/> : <h1> Waiting for data from server</h1>

    return ui
}