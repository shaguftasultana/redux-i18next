import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  data: any[]; 
}

const initialState: UserState = {
  name: '',
  email: '',
  data: [], 
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
