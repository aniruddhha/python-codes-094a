import { Component, useEffect, useState } from "react"

// fn = Component => Enhanced Component

const withConditional = Component => (props) => { 

    if(!props.dt) return <h1> Waiting for data from server</h1>
    if(!props.dt.length) return <h1> No data available </h1>

    return <Component {...props}/> 
}

const TodoList = withConditional(BaseTodoList)

export function ToDoListItem({ task, isComplete }) {
    return (
        <li> {task}  {isComplete ? '✅' : '❌'}  </li>
    )
}

export function BaseTodoList({ dt }) {

    // const fullList = dt.map(el => <ToDoListItem task={el.task} isComplete={el.isComplete} />)
    // const fullList = dt.map(el => <ToDoListItem {...el} />)

    return (
        <ul>
            {dt.map(el => <ToDoListItem {...el} />)}
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

    return <TodoList dt={dt}/>
}