import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getNewsFeedQuotes } from 'services';
import { setQuotes } from 'slices/newsFeedQuotesSlice';

export default function useFetchNewsFeedQuotes() {
  const { data, refetch } = useQuery('news-feed-quotes', getNewsFeedQuotes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuotes(data?.data.quotes));
  }, [data, dispatch]);
  return refetch;
}
