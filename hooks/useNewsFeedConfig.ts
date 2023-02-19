import {
  useFetchNewsFeedQuotes,
  useFetchQuotesLength,
  useFetchUserInfo,
} from 'hooks';
import { useTranslation } from 'next-i18next';

import { useSelector } from 'react-redux';
import {
  getAddPostModal,
  getNotificationModal,
  getQuotes,
  getSearchModal,
  length,
} from 'slices/newsFeedQuotesSlice';
import { getSearchType } from 'slices/searchSlice';

export default function useNewsFeedConfig() {
  useFetchUserInfo();
  const getAddPostModalHere = useSelector(getAddPostModal);
  const { i18n } = useTranslation('news-feed');
  const { refetch } = useFetchNewsFeedQuotes();
  const numberOfQuotes = useSelector(length);
  const getSearchModalHere = useSelector(getSearchModal);
  const getNotificationModalHere = useSelector(getNotificationModal);
  useFetchQuotesLength();
  const quotes = useSelector(getQuotes);
  const searchType = useSelector(getSearchType);

  return {
    refetch,

    numberOfQuotes,
    quotes,
    i18n,
    getAddPostModalHere,
    getSearchModalHere,
    searchType,
    getNotificationModalHere,
  };
}
