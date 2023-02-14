import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchQuotes } from 'services';
import { useDispatch } from 'react-redux';
import { setQuotes } from 'slices/quotesSlice';
import { useRouter } from 'next/router';

export default function useFetchQuotes() {
  const router = useRouter();
  const { data, refetch } = useQuery('quote-' + router.query.id, () =>
    fetchQuotes(router.query.id)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuotes(data?.data.quotes));
  }, [data, dispatch]);
  return refetch;
}
