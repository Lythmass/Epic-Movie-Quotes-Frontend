import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchGenres } from 'services';
import { useDispatch } from 'react-redux';
import { setGenres } from 'slices/moviesSlice';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function useFetchGenres() {
  const router = useRouter();
  const { data, refetch } = useQuery('fetch-genres', fetchGenres, {
    onError: (error: any) => {
      if (error.response.status == 401) {
        deleteCookie('XSRF-TOKEN');
        router.push('/403');
      }
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGenres(data?.data.genres));
  }, [data, dispatch]);
  return refetch;
}
