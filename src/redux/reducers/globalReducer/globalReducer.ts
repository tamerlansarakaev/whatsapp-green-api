import { createReducer, createAction } from '@reduxjs/toolkit';
import { IData } from '../../../types';

const initialState: IData = {
  messagesList: [],
};

export const usersLoaded = createAction<IData>('data/loaded');

export const globalReducer = createReducer(initialState, (builder) => {
  builder.addCase(usersLoaded, (state, action) => {
    state.messagesList = action.payload.messagesList;
  });
});
