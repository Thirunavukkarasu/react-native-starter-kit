import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async () => {
  const {data} = await axios.get('https://dummyjson.com/products/categories');
  return data;
};

export const useCategory = () => {
  const {isLoading, data} = useQuery(['catgeory'], fetchData);
  return {data, isLoading};
};
