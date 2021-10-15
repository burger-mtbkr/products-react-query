import { Product } from 'src/models';
import { TStoreState } from 'src/reducers';

export const getDeleteModalOpen = (state: TStoreState): boolean =>
  state.product.deleteModalOpen;

export const getSelectedProducts = (state: TStoreState): Product[] =>
  state.product.selectedProducts;

export const getEditProduct = (state: TStoreState): Product =>
  state.product.selectedProducts[0];
