import { useEffect } from 'react';
import { getUserData } from 'services';
import { useDispatch } from 'react-redux';
import { getData } from 'slices/userInfoSlice';
import { useQuery } from 'react-query';

export default function useFetchUserInfo() {
  const dispatch = useDispatch();
  const { data, refetch } = useQuery('userInfo', getUserData);
  useEffect(() => {
    dispatch(getData(data?.data['user-data']));
  }, [data, dispatch]);
  return refetch;
}
