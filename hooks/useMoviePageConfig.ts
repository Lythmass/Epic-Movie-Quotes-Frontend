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
  editQuote,
  getViewQuote,
  quoteDeleteConfirmationModal,
} from 'slices/quotesSlice';
import { getNotificationModal } from 'slices/newsFeedQuotesSlice';

export default function useMoviePageConfig() {
  const router = useRouter();
  useFetchMovies();
  const { i18n } = useTranslation('movies');
  useFetchUserInfo();
  useFetchQuotes();
  const deleteMovie = useSelector(getDeleteValue);
  const editMovie = useSelector(getEditValue);
  const addQuoteModalHere = useSelector(addQuoteModal);
  const getNotificationsModalHere = useSelector(getNotificationModal);
  const quoteDeleteConfirmationModalHere = useSelector(
    quoteDeleteConfirmationModal
  );
  const editQuoteHere = useSelector(editQuote);
  const viewQuote = useSelector(getViewQuote);
  const screenWidth = useWindowWidth();
  const movie = useSelector(getMovies)?.filter(
    (item: any) => item.id == router.query.id
  )[0];

  return {
    i18n,
    deleteMovie,
    screenWidth,
    movie,
    editMovie,
    addQuoteModalHere,
    quoteDeleteConfirmationModalHere,
    editQuoteHere,
    viewQuote,
    getNotificationsModalHere,
  };
}
