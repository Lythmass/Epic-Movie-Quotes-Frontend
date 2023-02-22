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
        if (process.env.NEXT_PUBLIC_API_URL?.substring(0, 5) == 'http:') {
          deleteCookie('XSRF-TOKEN');
        } else {
          deleteCookie('XSRF-TOKEN', {
            path: '/',
            domain: '.gigig.redberryinternship.ge',
          });
        }
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
