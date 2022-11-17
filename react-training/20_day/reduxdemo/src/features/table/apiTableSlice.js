import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users : []
};

export const userApiThunk = createAsyncThunk(
    'apitable/fetchUsers',
    () => fetch('https://reqres.in/api/users')
          .then(res => res.ok ? res.json() : Promise.reject(res) )
)

export const apiTableSlice = createSlice({
    name: 'apitable',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(userApiThunk.pending, (state) => {
                console.log('still wating for data')
            })
            .addCase(userApiThunk.fulfilled, (state, action) => {
                console.log('still wating for data')
                console.log(action)
                state.users = action.payload.data
            })
            .addCase(userApiThunk.rejected, (state, action) => {
                console.log('problem in loading data')
                console.log(action)
            });
    }
})

export const selectUsers = state => state.apitable.users

export default apiTableSlice.reducer