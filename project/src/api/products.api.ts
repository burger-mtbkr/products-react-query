import axios from 'axios';
import { Product } from 'src/models';

// See https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d
export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`api/product`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return response.data as Product[];
};
