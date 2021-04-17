import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },
    updateCredits: (state, { payload }) => {
      state.user.credits = payload;
    },
  },
});

export const { createUser, updateCredits } = authSlice.actions;

export default authSlice.reducer;
