import axios from 'axios';
import { Product } from 'src/models';

const apiBaseEndpoint = `http://localhost:5000/api`;

// See https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d
export const getAllProducts = async (): Promise<Product[]> => {
  const productEndPoint = `${apiBaseEndpoint}/product`;
  const response = await axios.get(productEndPoint, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return response.data as Product[];
};
