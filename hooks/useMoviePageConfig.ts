import { useRouter } from 'next/router';
import {
  useFetchMovies,
  useFetchUserInfo,
  useFetchQuotes,
  useWindowWidth,
} from 'hooks';
import { useSelector } from 'react-redux';
import { getMovies } from 'slices/moviesSlice';
import { useTranslation } from 'next-i18next';
import { getDeleteValue, getEditValue } from 'slices/moviesSlice';
import {
  addQuoteModal,
  getQuotes,
  quoteDeleteConfirmationModal,
} from 'slices/quotesSlice';

export default function useMoviePageConfig() {
  const router = useRouter();
  useFetchMovies();
  const { t, i18n } = useTranslation('movies');
  useFetchUserInfo();
  useFetchQuotes();
  const deleteMovie = useSelector(getDeleteValue);
  const editMovie = useSelector(getEditValue);
  const addQuoteModalHere = useSelector(addQuoteModal);
  const getQuotesHere = useSelector(getQuotes);
  const quoteDeleteConfirmationModalHere = useSelector(
    quoteDeleteConfirmationModal
  );
  const screenWidth = useWindowWidth();
  const movie = useSelector(getMovies)?.filter(
    (item: any) => item.id == router.query.id
  )[0];

  return {
    t,
    i18n,
    deleteMovie,
    screenWidth,
    movie,
    editMovie,
    addQuoteModalHere,
    getQuotesHere,
    quoteDeleteConfirmationModalHere,
  };
}
