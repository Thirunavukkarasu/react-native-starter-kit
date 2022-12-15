import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async ({queryKey}: any) => {
  const [_, categoryName] = queryKey || [];
  const {data} = await axios.get(
    `https://dummyjson.com/products/category/${categoryName}`,
  );
  return data;
};

export const useCategoryDetail = (categoryName: any) => {
  const {isLoading, data} = useQuery(
    ['categoryDetail', categoryName],
    fetchData,
  );
  return {data, isLoading};
};
