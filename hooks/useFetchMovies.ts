import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setMovies } from 'slices/moviesSlice';
import { fetchMovies } from 'services';
import { useEffect } from 'react';

export default function useFetchMovies() {
  const { data, refetch } = useQuery('get-movies', fetchMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovies(data?.data[0].movies));
  }, [data, dispatch]);
  return refetch;
}
