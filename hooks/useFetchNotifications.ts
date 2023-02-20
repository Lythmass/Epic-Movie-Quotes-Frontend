import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from 'services';
import { setNotifications } from 'slices/newsFeedQuotesSlice';
import { selectValue } from 'slices/userInfoSlice';

export default function useFetchNotifications() {
  const user = useSelector(selectValue);
  const dispatch = useDispatch();
  const { data, refetch } = useQuery('get-notifications', () =>
    getNotifications(user?.id)
  );
  useEffect(() => {
    dispatch(setNotifications(data?.data.notifications));
  }, [data, dispatch]);
  return refetch;
}
