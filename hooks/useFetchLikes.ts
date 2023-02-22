import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getLikes } from 'services';
import { setLikes } from 'slices/newsFeedQuotesSlice';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function useFetchLikes() {
  const router = useRouter();
  const { data, refetch } = useQuery('get-likes', getLikes, {
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
    dispatch(setLikes(data?.data.likes));
  }, [data, dispatch]);
  return refetch;
}
