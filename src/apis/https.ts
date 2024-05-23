import axios from 'axios';

const https = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default https;
