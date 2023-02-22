import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getNotifications } from 'services';
import { setNotifications } from 'slices/newsFeedQuotesSlice';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function useFetchNotifications() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, refetch } = useQuery('get-notifications', getNotifications, {
    onError: (error: any) => {
      if (error.response.status == 401) {
        deleteCookie('XSRF-TOKEN');
        router.push('/403');
      }
    },
  });
  useEffect(() => {
    dispatch(setNotifications(data?.data.notifications));
  }, [data, dispatch]);
  return refetch;
}
