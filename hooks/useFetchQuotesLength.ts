import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getNumberOfQuotes } from 'services';
import { setNumberOfQuotes } from 'slices/newsFeedQuotesSlice';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function useFetchQuotesLength() {
  const router = useRouter();
  const { data, refetch } = useQuery('number-of-quotes', getNumberOfQuotes, {
    onError: (error: any) => {
      if (error.response.status == 401) {
        deleteCookie('XSRF-TOKEN');
        router.push('/403');
      }
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNumberOfQuotes(data?.data.length));
  }, [dispatch, data]);
  return refetch;
}
