import { useState } from "react"
import styled from "styled-components"

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.col};
`

const Div = styled.div`
    background-color : red;
    padding: 1em;
`
const BigButton = styled.button`
   font-size: 3em;
   text-align: center;
`
export function Main() {

    const [ttl , setTtl] = useState('Well Hi')

    const onClk = () => setTtl('hey bye')

    return (
        <>
            <Div>
                <Title col='white'>
                    {ttl}
                </Title>

            </Div>
            <BigButton onClick={onClk}> Hi I am button</BigButton>
        </>
    )
}