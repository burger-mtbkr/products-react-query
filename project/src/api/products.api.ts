import axios from 'axios';
import { Product } from 'src/models';

export const getAllProducts = async (): Promise<Product[]> => {
  const url = process.env.REACT_APP_API_END_POINT;
  if (url) {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return response.data as Product[];
  }
  return [];
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  const url = process.env.REACT_APP_API_END_POINT;
  if (url) {
    const response = await axios.get(`${url}/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return response.data as Product;
  }
  return undefined;
};

export const postProduct = async (
  product: Product,
): Promise<Product | undefined> => {
  const url = process.env.REACT_APP_API_END_POINT;
  if (url) {
    const response = await axios.post(`${url}`, product, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data as Product;
  }
  return undefined;
};

export const putProduct = async (
  product: Product,
): Promise<Product | undefined> => {
  const url = process.env.REACT_APP_API_END_POINT;
  if (url) {
    const response = await axios.put(`${url}/${product.id}`, product, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data as Product;
  }
  return undefined;
};

export const deleteProduct = async (
  id: string,
): Promise<Product | undefined> => {
  const url = process.env.REACT_APP_API_END_POINT;
  if (url) {
    const response = await axios.delete(`${url}/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return response.data as Product;
  }
  return undefined;
};
