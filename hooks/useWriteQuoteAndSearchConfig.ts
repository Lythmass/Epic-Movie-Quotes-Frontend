import { useNewsFeedSearch, useWindowWidth } from 'hooks';
import { useState } from 'react';

export default function useWriteQuoteAndSearchConfig() {
  const windowWidth = useWindowWidth();
  const [searchGrow, setSearchGrow] = useState(false);
  const { refetch, t, search, searchType, searchHandler, dispatch } =
    useNewsFeedSearch();
  const submit = (event: any) => {
    event?.preventDefault();
    refetch(true);
  };

  return {
    windowWidth,
    searchGrow,
    t,
    search,
    searchType,
    setSearchGrow,
    submit,
    searchHandler,
    dispatch,
  };
}
