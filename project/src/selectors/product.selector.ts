import { Product, ProductListItem } from 'src/models';
import { TStoreState } from 'src/reducers';

export const getDeleteModalOpen = (state: TStoreState): boolean =>
  state.product.deleteModalOpen;

export const getSelectedProducts = (state: TStoreState): ProductListItem[] =>
  state.product.selectedProducts;

export const getEditProduct = (state: TStoreState): Product | undefined =>
  state.product.selectedProducts.length > 0
    ? state.product.selectedProducts[0]
    : undefined;
