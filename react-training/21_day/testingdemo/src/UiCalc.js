import { useState } from 'react'
import styled from 'styled-components'

const CenteredDiv = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` 

const Ip = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred ;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    color: rebeccapurple;
    font-size: 1.5em;
`
const IpCont = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
`
const StsLabel = styled.label`
    font-size: 1.5em;
`
const CalcButton = styled.button`
    background: palevioletred;
    color: white;

    font-size: 1.5em;
    margin: 1em;
    padding: .25em 1em;
    border: 2px solid palevioletred;
    border-radius: 0rem;

`
export function UiCalc() {

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [result, setResult] = useState()

    const onNum1Ch = e => setNum1(Number.parseInt(e.target.value))
    const onNum2Ch = e => setNum2(Number.parseInt(e.target.value))

    const onAddClk = () => setResult(num1 + num2)

    return (
        <CenteredDiv>
            <StsLabel>Calculator</StsLabel>
            <StsLabel data-testid='result'>{result}</StsLabel>
            <IpCont>
                <Ip data-testid='num1' type='number' placeholder='Num1' onChange={onNum1Ch}/>
                <StsLabel data-testid='num1Sts'>{ (num1 < 34 || num1 > 78) ?  '❌' : '✅' }</StsLabel>
            </IpCont>
            <IpCont>
                <Ip data-testid='num2' type='number' placeholder='Num2' onChange={onNum2Ch}/>
                <StsLabel data-testid='num2Sts'>{ (num2 > 0) ? '✅' : '❌'}</StsLabel>
            </IpCont>
            <CalcButton onClick={onAddClk}>Addition</CalcButton>
        </CenteredDiv>
    )
}