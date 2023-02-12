import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchGenres } from 'services';
import { useDispatch } from 'react-redux';
import { setGenres } from 'slices/moviesSlice';

export default function useFetchGenres() {
  const { data, refetch } = useQuery('fetch-genres', fetchGenres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGenres(data?.data.genres));
  }, [data, dispatch]);
  return refetch;
}
