import { ProductListItem } from 'src/models/';
import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'PRODUCT';

export const setDeleteModalOpen = createAction<boolean>(
  `${PREFIX}_SET_DELETE_MODAL_OPEN`,
);

export const setSelectedProducts = createAction<ProductListItem[]>(
  `${PREFIX}_SET_SELECTED_PRODUCTS`,
);

export const setHeaderTitle = createAction<string>(
  `APP_${PREFIX}_SET_HEADER_TITLE`,
);
