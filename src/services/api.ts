import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchExample = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
};
