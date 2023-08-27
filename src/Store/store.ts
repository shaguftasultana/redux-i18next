// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const dummyData = [
  { id: 1, name: "Shagufta Sultana", email: "shagufta@example.com" },
  { id: 2, name: "Shamsa Kanwal", email: "shamsa@example.com" },
  { id: 3, name: "Munaza", email: "Munaza@example.com" },
  { id: 4, name: "Asad", email: "asad@example.com" },
  { id: 5, name: "Shumaila", email: "shumaila@example.com" },
];

const initialState = {
  user: {
    name: '',
    email: '',
    data: dummyData, // Add the dummy data to the initial state
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState, // Set the initial state
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
