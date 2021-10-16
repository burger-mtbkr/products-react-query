import axios from 'axios';
import { IProductSaveResponse, Product } from 'src/models';

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

export const saveProduct = async (
  product: Product,
): Promise<IProductSaveResponse> => {
  const url = process.env.REACT_APP_API_END_POINT ?? '';
  try {
    const response = product.id
      ? await axios.put(`${url}`, product, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
      : await axios.post(`${url}`, product, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

    if (
      response.status === 200 ||
      response.status === 204 ||
      response.status === 201
    ) {
      return {
        product: response.data as Product,
        isSuccessful: true,
        error: undefined,
      };
    }
    return {
      product: undefined,
      isSuccessful: false,
      error: new Error('An error has occured'),
    };
  } catch (error) {
    return {
      product: undefined,
      isSuccessful: false,
      error: axios.isAxiosError(error)
        ? error
        : new Error('An error has occured'),
    };
  }
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
