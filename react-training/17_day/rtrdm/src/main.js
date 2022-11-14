// 1. npx create-react-app mnbmnbmnbmn
// 2. cd mnbmnbmnbmn
// 3. npm install react-router-dom localforage match-sorter sort-by
// 4. npm start

import {
    createBrowserRouter
} from "react-router-dom";

export function Login() {
    return (
        <h1>
            Trying to Login
        </h1>
    )
}

export function User() {
    return (
        <h1>
            Creating new user
        </h1>
    )
}

export function Dashboard() {
    return (
        <h1>
            Admin Dashboard
        </h1>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: "/dash",
        element: <Dashboard />,
    },
    {
        path: "/user",
        element: <User />,
    },
]);
