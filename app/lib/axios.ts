import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BACK_END_API_URL ?? 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
