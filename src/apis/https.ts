import axios from 'axios';

const https = axios.create({
  baseURL: import.meta.env.DEV
    ? 'http://localhost:5173/api'
    : import.meta.env.BASE_URL,
});

export default https;
