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
