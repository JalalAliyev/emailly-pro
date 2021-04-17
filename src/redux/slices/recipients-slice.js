import { createSlice } from '@reduxjs/toolkit';

export const recSlice = createSlice({
  name: 'recipients',
  initialState: {
    recipients: null,
  },
  reducers: {
    createRecipients: (state, { payload }) => {
      console.log('payload>>>', payload);
      state.recipients = payload;
    },
  },
});

export const { createRecipients } = recSlice.actions;

export default recSlice.reducer;
