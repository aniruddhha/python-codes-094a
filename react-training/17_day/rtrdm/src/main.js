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
