import { createReducer } from '@reduxjs/toolkit';
import { setDeleteModalOpen, setSelectedProducts } from 'src/actions';
import { IProductState } from 'src/models/product.model';

export const productInitialState: IProductState = {
  deleteModalOpen: false,
  selectedProducts: [],
};

export default createReducer(productInitialState, (builder) =>
  builder
    .addCase(setDeleteModalOpen, (state, { payload }) => ({
      ...state,
      deleteModalOpen: payload,
    }))
    .addCase(setSelectedProducts, (state, { payload }) => ({
      actionTriggerRefetching: undefined,
      ...state,
      selectedProducts: payload,
    })),
);
