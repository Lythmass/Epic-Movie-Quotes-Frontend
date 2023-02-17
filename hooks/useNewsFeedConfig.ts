import {
  useFetchNewsFeedQuotes,
  useFetchQuotesLength,
  useFetchUserInfo,
} from 'hooks';
import { useTranslation } from 'next-i18next';

import { useSelector } from 'react-redux';
import { getQuotes, length } from 'slices/newsFeedQuotesSlice';

export default function useNewsFeedConfig() {
  useFetchUserInfo();
  const { i18n } = useTranslation('news-feed');
  const { refetch, startRange } = useFetchNewsFeedQuotes();
  const numberOfQuotes = useSelector(length);
  useFetchQuotesLength();
  const quotes = useSelector(getQuotes);

  return {
    refetch,
    startRange,
    numberOfQuotes,
    quotes,
    i18n,
  };
}
