import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getLikes } from 'services';
import { setLikes } from 'slices/newsFeedQuotesSlice';

export default function useFetchLikes() {
  const { data, refetch } = useQuery('get-likes', getLikes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLikes(data?.data.likes));
  }, [data, dispatch]);
  return refetch;
}
