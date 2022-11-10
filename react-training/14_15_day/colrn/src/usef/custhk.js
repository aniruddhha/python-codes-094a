import { useEffect, useState } from "react"

export const useFetch = url => {

    const [data, setData] = useState({})

    useEffect( () => {
        fetch(url)
        .then( httpRes => httpRes.json())
        .then(json => setData(json) )
    },  [url] ) 

    return data
}