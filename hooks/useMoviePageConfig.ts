import { useRouter } from 'next/router';
import { useFetchMovies, useFetchUserInfo, useWindowWidth } from 'hooks';
import { useSelector } from 'react-redux';
import { getMovies } from 'slices/moviesSlice';
import { useTranslation } from 'next-i18next';
import { getDeleteValue } from 'slices/moviesSlice';

export default function useMoviePageConfig() {
  const router = useRouter();
  useFetchMovies();
  const { t, i18n } = useTranslation('movies');
  useFetchUserInfo();
  const deleteMovie = useSelector(getDeleteValue);
  const screenWidth = useWindowWidth();
  const movie = useSelector(getMovies)?.filter(
    (item: any) => item.id == router.query.id
  )[0];

  return { t, i18n, deleteMovie, screenWidth, movie };
}
