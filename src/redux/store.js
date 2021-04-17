import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import formReducer from './slices/form-slice';
import recipientsReducer from './slices/recipients-slice';

const middleware = applyMiddleware([thunkMiddleware, logger]);
export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    recipients: recipientsReducer,
  },
  middleware,
});
