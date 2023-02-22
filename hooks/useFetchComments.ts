import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getComments } from 'services';
import { setComments } from 'slices/newsFeedQuotesSlice';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function useFetchComments() {
  const router = useRouter();
  const { data, refetch } = useQuery('get-comments', getComments, {
    onError: (error: any) => {
      if (error.response.status == 401) {
        deleteCookie('XSRF-TOKEN');
        router.push('/403');
      }
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setComments(data?.data.comments));
  }, [data, dispatch]);
  return refetch;
}
