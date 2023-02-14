import { useSelector } from 'react-redux';
import { getGenres } from 'slices/moviesSlice';
import { getMovies } from 'slices/moviesSlice';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';

export default function useAddMovieModalGenresConfig() {
  const router: any = useRouter();
  const movies = useSelector(getMovies);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    if (movies != undefined) {
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].id == router.query.id) {
          setMovie(() => {
            return movies[i]['genres'].map((genre: any) => {
              return {
                value: genre.name.toLowerCase(),
                label: t('genres.' + genre.name),
              };
            });
          });
        }
      }
    }
  }, [movies]);
  const { t } = useTranslation('movies');
  const methods = useFormContext();
  const genres = useSelector(getGenres)?.map((genre: { name: string }) => {
    return {
      value: genre.name.toLowerCase(),
      label: t('genres.' + genre.name),
    };
  });

  return { router, movie, t, methods, genres };
}
