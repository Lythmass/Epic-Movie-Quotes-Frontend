import { useFetchGenres } from 'hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMovies } from 'slices/moviesSlice';
import { MovieType } from 'types';

export default function useEditMovieModalConfig() {
  const router: any = useRouter();
  useFetchGenres();
  const movies = useSelector(getMovies);
  const [movie, setMovie] = useState<MovieType | {}>({});
  useEffect(() => {
    if (movies != undefined) {
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].id == router.query.id) {
          setMovie(movies[i]);
        }
      }
    }
  }, [movies]);

  return movie;
}
