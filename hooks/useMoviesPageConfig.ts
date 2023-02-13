import { addMovieModal } from 'slices/addMovieModalSlice';
import { useSelector } from 'react-redux';
import { useFetchMovies } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useFetchUserInfo } from 'hooks';

export default function useMoviesPageConfig() {
  useFetchUserInfo();
  useFetchMovies();
  const { i18n } = useTranslation('movies');
  const addMovieModalHere = useSelector(addMovieModal);

  return { i18n, addMovieModalHere };
}
