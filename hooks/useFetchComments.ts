import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getComments } from 'services';
import { setComments } from 'slices/newsFeedQuotesSlice';

export default function useFetchComments() {
  const { data, refetch } = useQuery('get-comments', getComments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setComments(data?.data.comments));
  }, [data, dispatch]);
  return refetch;
}
