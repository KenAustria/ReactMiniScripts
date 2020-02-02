import axios from 'axios';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

const API_URL = 'https://pixabay.com/api';
const API_KEY = '10264275-868d83de96a4d0c47db26f9e0';

export const fetchPhotos = (searchText) => {
  const url = `${API_URL}/?key=${API_KEY}&q=${searchText}&image_type=photo&safesearch=true`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_PHOTOS,
    payload: request
  };
};