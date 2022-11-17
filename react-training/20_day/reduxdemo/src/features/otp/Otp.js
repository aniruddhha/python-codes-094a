import { useState } from "react"
import styled from "styled-components"

import { useSelector, useDispatch } from 'react-redux';
import { verify,  verifyWithOtp } from "./otpSlice"; 
import { selectIsVerified } from "./otpSlice"; 

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const AwesomeLabel = styled.label`
    text-align: center;
    background-color: blue;
    color: white;
    padding: 8px;
`

export function Otp() {

    const isVerified = useSelector(selectIsVerified);
    const dispatch = useDispatch();

    const [otpVal, setOtpVal] = useState()
    const onIpCh = e => setOtpVal(e.target.value)

    // const onClk = () => { dispatch(verify()) }
    const onClk = () => { dispatch(verifyWithOtp(otpVal)) }

    return(
        <CenteredDiv>
            <input type='text' placeholder="OTP" onChange={onIpCh}/>
            <input type='button' value='Okay' onClick={onClk}/>

           <AwesomeLabel> { isVerified ? 'Success' : 'Fail'} </AwesomeLabel>
        </CenteredDiv>
    )
}