const API_END_POINT = 'https://fakestoreapi.com/products';
const CATEGORY_ENDPOINT = '/categories';

export const getAllProducts = async () => {
  const response = await fetch(API_END_POINT);
  const data = await response.json();
  return data;
};

export const getAllCategories = async () => {
  const response = await fetch(API_END_POINT + CATEGORY_ENDPOINT);
  const data = await response.json();
  return data;
};
