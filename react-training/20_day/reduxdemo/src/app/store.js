import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import optReducer from '../features/otp/otpSlice'
import calcReducer from '../features/calc/calcSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    otp : optReducer,
    calc : calcReducer
  },
});

console.log(store.getState)
