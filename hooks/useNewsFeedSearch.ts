import { useFetchNewsFeedQuotes } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchModal } from 'slices/newsFeedQuotesSlice';
import {
  getQuery,
  getSearchType,
  setQuery,
  setSearchType,
} from 'slices/searchSlice';

export default function useNewsFeedSearch() {
  const dispatch = useDispatch();
  const { refetch } = useFetchNewsFeedQuotes();
  const { t } = useTranslation('news-feed');
  const search = useSelector(getQuery);
  const searchType = useSelector(getSearchType);
  const searchModal = useSelector(getSearchModal);
  const searchHandler = (event: any) => {
    if (event.target.value[0] == '@') {
      dispatch(setSearchType('@'));
      dispatch(setQuery(event.target.value.substring(1)));
    } else if (event.target.value[0] == '#') {
      dispatch(setSearchType('#'));
      dispatch(setQuery(event.target.value.substring(1)));
    } else {
      dispatch(setSearchType(''));
    }
  };

  return {
    refetch,
    t,
    search,
    searchType,
    searchHandler,
    dispatch,
    searchModal,
  };
}
