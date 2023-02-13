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

//Authentication
export const createUser = async (data: any) => {
  const response = await instance.post('/api/register', data);
  return response;
};

export const markEmailAsVerified = async (path: string) => {
  const response = await instance.get(`/api/email/verify/${path}`);
  return response;
};

export const authenticateUser = async (data: any) => {
  const response = await instance.post('/api/login', data);
  return response;
};

export const authenticateUserUsingGoogle = async (googleId: string) => {
  const response = await instance.post('/api/google-auth', {
    googleId: googleId,
  });
  return response;
};
//End of Authentication

//Password resets
export const sendForgotPassword = async (data: any) => {
  const response = await instance.post('/api/forgot', data);
  return response;
};

export const sendPasswordReset = async (data: any) => {
  const response = await instance.post('/api/reset', data);
  return response;
};
//End of password resets

//Profile
export const getUserData = async () => {
  const response = await instance.get('/api/get-user-data');
  return response;
};

export const updateUserData = async (data: any) => {
  const response = await instance.post('/api/post-user-data', data);
  return response;
};

export const addNewEmail = async (data: any) => {
  const response = await instance.post('/api/add-new-email', data);
  return response;
};

export const removeEmail = async (data: any) => {
  const response = await instance.post('/api/delete-email', data);
  return response;
};

export const verifySecondaryEmail = async (
  id: number,
  token: string,
  email: string
) => {
  const response = await instance.get(
    `/api/secondary-email/verify/${id}/${token}/${email}`
  );
  return response;
};

export const changePrimaryEmail = async (data: any) => {
  const response = await instance.post('/api/change-primary-email', data);
  return response;
};

export const changeProfilePicture = async (data: any) => {
  const response = await instance.post('/api/upload-photo', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'multipart/form-data',
    },
  });
  return response;
};
//End of profile

//Movies
export const fetchGenres = async () => {
  const response = await instance.get('/api/genres');
  return response;
};

export const uploadMovie = async (data: any) => {
  const response = await instance.post('/api/upload-movie', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'multipart/form-data',
    },
  });
  return response;
};

export const fetchMovies = async () => {
  const response = await instance.get('/api/movies');
  return response;
};

export const deleteMovie = async (id: any) => {
  const response = await instance.post('/api/delete-movie', { id: id });
  return response;
};

//End of movies
