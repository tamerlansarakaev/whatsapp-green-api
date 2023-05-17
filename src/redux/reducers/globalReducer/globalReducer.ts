import { createReducer, createAction } from '@reduxjs/toolkit';
import { IData } from '../../../types';

const initialState: IData = {
  messagesList: [],
  phoneNumber: '',
  config: null,
};

export const configLoad = createAction<IData>('data/configLoad');
export const changePhoneNumber = createAction<IData>('phoneNumber/change');

export const globalReducer = createReducer(initialState, (builder) => {
  builder.addCase(configLoad, (state, action) => {
    state.config = action.payload.config;
  });
  builder.addCase(changePhoneNumber, (state, action) => {
    state.phoneNumber = action.payload.phoneNumber;
  });
});
