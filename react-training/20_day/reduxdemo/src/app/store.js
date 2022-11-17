import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import optReducer from '../features/otp/otpSlice'
import calcReducer from '../features/calc/calcSlice';
import apiTableReducer from '../features/table/apiTableSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    otp : optReducer,
    calc : calcReducer,
    apitable : apiTableReducer
  },
});

console.log(store.getState)
