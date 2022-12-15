import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async () => {
  const {data} = await axios.get('https://dummyjson.com/products?limit=1000');
  return data;
};

export const useProducts = () => {
  const {isLoading, data} = useQuery(['products'], fetchData);
  return {data, isLoading};
};
