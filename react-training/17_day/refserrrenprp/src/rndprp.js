
export function Animal() {
    return  (
        <h1>
            We all are animals
        </h1>
    )
}

export function Car() {
    return  (
        <h1>
            We use cars
        </h1>
    )
}

export function Main({ render }) {
    return (
        <>
            {render()}
            <h1>Hey Hi ss</h1>
        </>
    )
}

