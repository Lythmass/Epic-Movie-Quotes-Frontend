import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, getMovies } from 'slices/moviesSlice';
import { MovieType } from 'types';
import { useEffect, useState } from 'react';
import useWindowWidth from './useWindowWidth';

export default function useMoviePageHeaderConfig() {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const windowWidth = useWindowWidth();
  const { t, i18n } = useTranslation('movies');
  const [originalMovies, setOriginalMovies] = useState([]);
  useEffect(() => {
    if (movies?.length > originalMovies.length) {
      setOriginalMovies(movies);
    }
  }, [movies]);

  const searchHandler = (event: any) => {
    dispatch(
      setMovies(
        originalMovies?.filter(
          (movie: MovieType) =>
            event.target.value ===
            movie.title[i18n.language === 'en' ? 'en' : 'ka'].substring(
              0,
              event.target.value.length
            )
        )
      )
    );
  };

  return { t, searchHandler, dispatch, windowWidth };
}
