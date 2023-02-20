import { useDispatch } from 'react-redux';
import { getNewsFeedQuotes } from 'services';
import { setQuotes, getQuotes } from 'slices/newsFeedQuotesSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getQuery, getSearchType } from 'slices/searchSlice';
import { useTranslation } from 'next-i18next';

export default function useFetchNewsFeedQuotes() {
  const dispatch = useDispatch();
  const quotes = useSelector(getQuotes);
  const searchType = useSelector(getSearchType);
  const search = useSelector(getQuery);
  const { i18n } = useTranslation('news-feed');

  const refetch = async (update: boolean) => {
    if (update) {
      const data = await getNewsFeedQuotes(
        0,
        searchType,
        search,
        i18n.language
      );
      dispatch(setQuotes(data?.data.quotes));
    } else {
      const data = await getNewsFeedQuotes(
        quotes?.length,
        searchType,
        search,
        i18n.language
      );
      if (quotes?.length > 0) {
        dispatch(setQuotes([...quotes, ...data?.data.quotes]));
      } else {
        dispatch(setQuotes(data?.data.quotes));
      }
    }
  };

  useEffect(() => {
    refetch(false);
  }, []);

  return { refetch };
}
