import { get } from './api.js';

const BASE_URI = 'https://www.themealdb.com/api/json/v1/1/';

const fectchMeals = async () => {
  const END_POINT = 'search.php';
  const PARAMS = '?f=p';
  const URI = `${BASE_URI}${END_POINT}${PARAMS}`;
  const response = await get(URI);
  return response.json();
};

export default fectchMeals;