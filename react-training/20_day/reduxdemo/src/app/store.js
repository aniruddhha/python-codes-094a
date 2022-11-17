import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import optReducer from '../features/otp/otpSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    otp : optReducer
  },
});

console.log(store.getState())
