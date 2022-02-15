import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../views/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
