import { useEffect, useState } from 'react'

export function UsEf() {

    // 1. I want reset color picker to balck after every 3s
    // 2. I want to execute some code only at the begining of component
    // 3. I want to execute some code on change of perticual state
    // 4. I want to do plain old DOM manipulation
    // 5. Want handle that code which is not controlled by react

    const [st, setSt] = useState(0)
    const [ab, setAb] = useState(0)
    const [wd, setWd] = useState(0)
    const [ht, setHt] = useState(0)

    const onCl = () => setSt(st + 1)

    const onAb = () => setAb(ab + 1)

    useEffect(() => {
        console.log('I would be getting called again and again')
    })

    useEffect(() => {
        console.log('I would be getting called only once')
    }, [])

    useEffect(() => {
        console.log('I would be getting called only if ab changes')
    }, [ab])

    useEffect( () => {

        function onResize() {
            setWd(window.innerWidth)
            setHt(window.innerHeight)
        }

        window.addEventListener('resize', onResize)

        return () => {
            // cleanup
            window.removeEventListener('resize')
        }

    } )
   
    return (
        <>
            <div>
                <h1>Width {wd}</h1>
                <h1>Height {ht}</h1>
            </div>
            <input type='button' value='Okay' onClick={onCl}/>
            <input type='button' value='Ab' onClick={onAb}/>
        </>
    )
}