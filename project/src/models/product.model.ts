import * as yup from 'yup';
import { SchemaOf } from 'yup';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export interface IProductState {
  deleteModalOpen: boolean;
  selectedProducts: Product[];
}

export const productSchema: SchemaOf<Product> = yup
  .object()
  .shape({
    id: yup.number().positive().required(),
    name: yup.string().required('Name is required'),
    category: yup.string().required('Category is required'),
    price: yup
      .number()
      .typeError('Price is required')
      .min(0, 'Price must be greater than 0')
      .required('Price is required'),
  })
  .required();
