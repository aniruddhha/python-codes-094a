import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    num1 : 0,
    num2 : 0,
    result : 0,
    status: 'idle',
};

export const calcSlice = createSlice({
    name : 'calc',
    initialState, 
    reducers : {
        add : (state, action) => {
            state.result = Number.parseInt(action.payload.num1) + Number.parseInt(action.payload.num2)
        }
    }
})

export const selectResult = state => state.calc.result
export const { add } = calcSlice.actions

export default calcSlice.reducer
