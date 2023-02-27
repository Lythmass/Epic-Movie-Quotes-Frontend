import { useEffect } from 'react';
import { getUserData } from 'services';
import { useDispatch } from 'react-redux';
import { getData } from 'slices/userInfoSlice';
import { useQuery } from 'react-query';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function useFetchUserInfo() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, refetch } = useQuery('userInfo', getUserData, {
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
  useEffect(() => {
    dispatch(getData(data?.data['user-data']));
  }, [data, dispatch]);
  return refetch;
}
