import { createReducer } from '@reduxjs/toolkit';
import { setHeaderTitle } from 'src/actions';
import { IAppState } from 'src/models/app.model';

export const appInitialState: IAppState = {
  title: 'Product list',
};

export default createReducer(appInitialState, (builder) =>
  builder.addCase(setHeaderTitle, (state, { payload }) => ({
    ...state,
    title: payload,
  })),
);
