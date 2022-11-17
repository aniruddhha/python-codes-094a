import { useState } from "react"
import styled from "styled-components"

import { useSelector, useDispatch } from 'react-redux';

import { add } from './calcSlice'
import { selectResult } from './calcSlice'

const Result = styled.label`
    font-size: 2em;
    background-color: gray;
    color: wheat;
`
const Ip = styled.input`
    font-size: 1em;
    color: blue;
`
const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const CalcButton = styled.button`
    background-color: tomato;
    color: white;
`

export function Calc() {

    const result = useSelector(selectResult);
    const dispatch = useDispatch();

    const [num1, setNum1] = useState()
    const [num2 , setNum2] = useState()

    const onNum1Ch = e => setNum1(e.target.value)
    const onNum2Ch = e => setNum2(e.target.value)

    const onCalc = () => dispatch(add({num1, num2}))

    return (
        <CenteredDiv>
            <Column>
                <Result>{result}</Result>
                <Ip placeholder="Num1" onChange={onNum1Ch} />
                <Ip placeholder="Num2" onChange={onNum2Ch}/>
                <CalcButton onClick={onCalc}>Okar</CalcButton>
            </Column>
        </CenteredDiv>
    )
}