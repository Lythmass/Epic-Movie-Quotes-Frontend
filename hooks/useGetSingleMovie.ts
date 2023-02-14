import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getMovies } from 'slices/moviesSlice';
import { useRouter } from 'next/router';

export default function useGetSingleMovie() {
  const movies = useSelector(getMovies);
  const router = useRouter();
  const [movie, setMovie] = useState<any>({});
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
