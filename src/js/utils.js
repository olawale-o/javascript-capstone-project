import { get, post } from './api.js';

const BASE_URI = 'https://www.themealdb.com/api/json/v1/1/';
const INVOLVEMENT_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const fectchMeals = async () => {
  const END_POINT = 'search.php';
  const PARAMS = '?f=p';
  const URI = `${BASE_URI}${END_POINT}${PARAMS}`;
  const response = await get(URI);
  return response.json();
};

export const fetchSingleMeal = async (id) => {
  const END_POINT = 'lookup.php?i=';
  const PARAMS = id;
  const URI = `${BASE_URI}${END_POINT}${PARAMS}`;
  const response = await get(URI);
  return response.json();
};

export const createApp = async () => {
  const END_POINT = 'apps/';
  const URI = `${INVOLVEMENT_URI}${END_POINT}`;
  const response = await post(URI);
  return response.text();
};

export const fetchMealLikes = async (appId) => {
  const END_POINT = `apps/${appId}/likes`;
  const URI = `${INVOLVEMENT_URI}${END_POINT}`;
  const response = await get(URI);
  return response.json();
};

export const fetchMealSingleComment = async (appId, id) => {
  const END_POINT = `apps/${appId}/comments?item_id=${id}`;
  const URI = `${INVOLVEMENT_URI}${END_POINT}`;
  const response = await get(URI);
  return response.json();
};

export const likeMeal = async (id, appId) => {
  const END_POINT = `apps/${appId}/likes/`;
  const URI = `${INVOLVEMENT_URI}${END_POINT}`;
  await post(URI, { item_id: id });
};

export const postMealComment = async (appId, data) => {
  const END_POINT = `apps/${appId}/comments/`;
  const URI = `${INVOLVEMENT_URI}${END_POINT}`;
  await post(URI, data);
};