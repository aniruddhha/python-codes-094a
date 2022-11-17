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
        }
    }
})

export const selectIsVerified = state => state.otp.isVerified

export const { verify } = otpSlice.actions

export default otpSlice.reducer