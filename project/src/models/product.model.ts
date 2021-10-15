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
