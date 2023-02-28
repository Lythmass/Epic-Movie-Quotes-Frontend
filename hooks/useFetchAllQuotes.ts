import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getAllQuotes } from 'services';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { setAllQuotes } from 'slices/quotesSlice';

export default function useFetchAllQuotes() {
  const router = useRouter();
  const { data, refetch } = useQuery('get-all-quotes', getAllQuotes, {
    onError: (error: any) => {
      if (error.response.status == 401) {
        if (process.env.NEXT_PUBLIC_API_URL?.substring(0, 5) == 'http:') {
          deleteCookie('XSRF-TOKEN');
        } else {
          deleteCookie('XSRF-TOKEN', {
            path: '/',
            domain: process.env.NEXT_PUBLIC_DOMAIN,
          });
        }
        router.push('/403');
      }
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllQuotes(data?.data.quotes));
  }, [data, dispatch]);
  return refetch;
}
