import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    otp : 0,
    isVerified: false,
    status: 'idle',
};

export const otpSlice = createSlice({
    name : 'otp',
    initialState,
    reducers : {
        verify : (state) => {
            state.isVerified = !state.isVerified
        },
        verifyWithOtp: (state, action) => {
            console.log(action)

            if(action.payload > 100)  state.isVerified = true
            else state.isVerified = false
        }
    }
})

export const selectIsVerified = state => state.otp.isVerified

export const { verify, verifyWithOtp } = otpSlice.actions

export default otpSlice.reducer