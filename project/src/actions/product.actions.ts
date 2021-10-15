import { Product } from 'src/models/';
import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'PRODUCT';

export const setDeleteModalOpen = createAction<boolean>(
  `${PREFIX}_SET_DELETE_MODAL_OPEN`,
);

export const setSelectedProducts = createAction<Product[]>(
  `${PREFIX}_SET_SELECTED_PRODUCTS`,
);
