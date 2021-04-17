import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    title: '',
    subject: '',
    body: '',
    recipients: '',
  },
  reducers: {
    createTitle: (state, { payload }) => {
      state.title = payload;
    },
    createSubject: (state, { payload }) => {
      state.subject = payload;
    },
    createRecipient: (state, { payload }) => {
      state.recipients = payload;
    },
    createBody: (state, { payload }) => {
      state.body = payload;
    },
    deleteAllValues: (state) => {
      state.title = '';
      state.subject = '';
      state.body = '';
      state.recipients = '';
    },
  },
});

export const {
  createTitle,
  createSubject,
  createRecipient,
  createBody,
  deleteAllValues,
} = formSlice.actions;

export default formSlice.reducer;
