import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchQuotes } from 'services';
import { useDispatch } from 'react-redux';
import { setQuotes } from 'slices/quotesSlice';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';

export default function useFetchQuotes() {
  const router = useRouter();
  const { data, refetch } = useQuery(
    'quote-' + router.query.id,
    () => fetchQuotes(router.query.id),
    {
      onError: (error: any) => {
        if (error.response.status == 401) {
          deleteCookie('XSRF-TOKEN');
          router.push('/403');
        }
      },
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuotes(data?.data.quotes));
  }, [data, dispatch]);
  return refetch;
}
