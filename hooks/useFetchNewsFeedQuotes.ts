import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getNewsFeedQuotes } from 'services';
import { setQuotes, getQuotes } from 'slices/newsFeedQuotesSlice';
import { useSelector } from 'react-redux';

export default function useFetchNewsFeedQuotes() {
  const dispatch = useDispatch();
  const quotes = useSelector(getQuotes);
  const [startRange, setStartRange] = useState(0);
  const { data, refetch } = useQuery(
    'news-feed-quotes',
    () => getNewsFeedQuotes(startRange),
    { onSuccess: () => setStartRange((oldValue) => oldValue + 2) }
  );

  useEffect(() => {
    if (quotes == undefined) {
      dispatch(setQuotes(data?.data.quotes));
    } else {
      dispatch(setQuotes([...quotes, ...data?.data.quotes]));
    }
  }, [data, dispatch]);

  return { refetch, startRange };
}
