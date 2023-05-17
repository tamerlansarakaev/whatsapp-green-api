import { combineReducers } from '@reduxjs/toolkit';
import { globalReducer } from './globalReducer/globalReducer';

export const rootReducer = combineReducers({
  globalReducer,
});
