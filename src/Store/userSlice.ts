// src/store/userSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  data: any[]; // Define the data property
  // Add other user properties as needed
}

const initialState: UserState = {
  name: '',
  email: '',
  data: [], // Initialize the data property
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
