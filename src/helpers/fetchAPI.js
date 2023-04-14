import axios from 'axios';

const API_KEY = '33515786-5b52176933b5882b00b6da0a7';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchData = async (q, page) => {
  const response = await axios.get(`?q=${q}`, {
    params: {
      key: API_KEY,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return response.data;
};
