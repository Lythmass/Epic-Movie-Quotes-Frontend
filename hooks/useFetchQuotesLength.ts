import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getNumberOfQuotes } from 'services';
import { setNumberOfQuotes } from 'slices/newsFeedQuotesSlice';

export default function useFetchQuotesLength() {
  const { data, refetch } = useQuery('number-of-quotes', getNumberOfQuotes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNumberOfQuotes(data?.data.length));
  }, [dispatch, data]);
  return refetch;
}
