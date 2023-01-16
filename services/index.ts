import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export const fetchCSRFToken = async () => {
  const response = await instance.get('/sanctum/csrf-cookie');
  return response;
};

export const createUser = async (data: any) => {
  const response = await instance.post('/api/register', data);
  return response;
};

export const markEmailAsVerified = async (path: string) => {
  const response = await instance.get(`/api/email/verify/${path}`);
  return response;
};
