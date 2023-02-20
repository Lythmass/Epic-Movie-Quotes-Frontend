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

export const updateMovie = async (id: any, data: any) => {
  const response = await instance.post(
    '/api/update-movie',
    {
      ...data,
      id: id,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    }
  );
  return response;
};

//End of movies

//Quotes
export const uploadQuote = async (data: any, id: number) => {
  const response = await instance.post(
    '/api/upload-quote',
    { ...data, id: id },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    }
  );
  return response;
};

export const fetchQuotes = async (id: any) => {
  const response = await instance.post('/api/get-quotes', { id: id });
  return response;
};

export const deleteQuote = async (id: any) => {
  const response = await instance.post('/api/delete-quote', { id: id });
  return response;
};

export const updateQuote = async (data: any, id: number) => {
  const response = await instance.post(
    '/api/update-quote',
    { ...data, id: id },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    }
  );
  return response;
};
//End of quotes

//News feed
export const getNewsFeedQuotes = async (
  startRange: number,
  search_type: string,
  search: string,
  locale: string
) => {
  const response = await instance.post('/api/news-feed/quotes', {
    startRange: startRange,
    search_type: search_type,
    search: search,
    locale: locale,
  });
  return response;
};

export const getNumberOfQuotes = async () => {
  const response = await instance.get('/api/news-feed/number-of-quotes');
  return response;
};

export const addNewPost = async (data: any) => {
  const response = await instance.post('/api/news-feed/post', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'multipart/form-data',
    },
  });
  return response;
};

export const postComment = async (data: any) => {
  const response = await instance.post('/api/news-feed/post-comment', data);
  return response;
};

export const getComments = async () => {
  const response = await instance.get('/api/news-feed/comments');
  return response;
};

export const postLike = async (data: any) => {
  const response = await instance.post('/api/news-feed/like', data);
  return response;
};

export const getLikes = async () => {
  const response = await instance.get('/api/news-feed/likes');
  return response;
};

export const postUnlike = async (data: any) => {
  const response = await instance.post('/api/news-feed/unlike', data);
  return response;
};

export const getNotifications = async (id: number) => {
  const response = await instance.post('/api/notifications/get-messages', {
    id: id,
  });
  return response;
};

//End of news feed

//Laravel echo auth
export const echoAuthorize = async (socket_id: number, channel_name: any) => {
  const response = await instance.post('/api/broadcasting/auth', {
    socket_id: socket_id,
    channel_name: channel_name,
  });
  return response;
};
//End of Laravel echo auth
