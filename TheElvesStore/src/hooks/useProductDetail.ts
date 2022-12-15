import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async ({queryKey}: any) => {
  const [_, productId] = queryKey || [];
  const {data} = await axios.get(`https://dummyjson.com/products/${productId}`);
  return data;
};

export const useProductDetail = (productId: any) => {
  const {isLoading, data} = useQuery(['productDetail', productId], fetchData);
  return {data, isLoading};
};
