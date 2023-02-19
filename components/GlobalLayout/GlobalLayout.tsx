import { AuthNavBar } from 'components';
import { useSelector } from 'react-redux';
import { showNewEmailModal } from 'slices/newEmailModalSlice';
import { addMovieModal } from 'slices/addMovieModalSlice';
import { getDeleteValue } from 'slices/moviesSlice';
import {
  addQuoteModal,
  editQuote,
  quoteDeleteConfirmationModal,
} from 'slices/quotesSlice';
import { getAddPostModal, getSearchModal } from 'slices/newsFeedQuotesSlice';

export const GlobalLayout: React.FC<{ children: JSX.Element }> = (props) => {
  const showNewEmailModalHere = useSelector(showNewEmailModal);
  const addMovieModalHere = useSelector(addMovieModal);
  const getDeleteValueHere = useSelector(getDeleteValue);
  const AddQuoteModalHere = useSelector(addQuoteModal);
  const quoteDeleteConfirmationModalHere = useSelector(
    quoteDeleteConfirmationModal
  );
  const editQuoteHere = useSelector(editQuote);
  const getAddPostModalHere = useSelector(getAddPostModal);
  const getSearchModalHere = useSelector(getSearchModal);
  return (
    <div
      className={` ${
        (showNewEmailModalHere ||
          addMovieModalHere ||
          getDeleteValueHere ||
          quoteDeleteConfirmationModalHere ||
          editQuoteHere ||
          getAddPostModalHere ||
          getSearchModalHere ||
          AddQuoteModalHere) &&
        'overflow-hidden h-screen'
      } w-full bg-global-layout-bg min-h-screen`}
    >
      <AuthNavBar />
      {props.children}
    </div>
  );
};

export default GlobalLayout;
