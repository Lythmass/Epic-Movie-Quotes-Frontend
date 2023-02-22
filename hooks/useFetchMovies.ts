import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setMovies } from 'slices/moviesSlice';
import { fetchMovies } from 'services';
import { useEffect } from 'react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function useFetchMovies() {
  const router = useRouter();
  const { data, refetch } = useQuery('get-movies', fetchMovies, {
    onError: (error: any) => {
      if (error.response.status == 401) {
        deleteCookie('XSRF-TOKEN');
        router.push('/403');
      }
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovies(data?.data[0].movies));
  }, [data, dispatch]);
  return { refetch };
}
