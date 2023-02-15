import { AuthNavBar } from 'components';
import { useSelector } from 'react-redux';
import { showNewEmailModal } from 'slices/newEmailModalSlice';
import { addMovieModal } from 'slices/addMovieModalSlice';
import { getDeleteValue } from 'slices/moviesSlice';
import {
  addQuoteModal,
  quoteDeleteConfirmationModal,
} from 'slices/quotesSlice';

export const GlobalLayout: React.FC<{ children: JSX.Element }> = (props) => {
  const showNewEmailModalHere = useSelector(showNewEmailModal);
  const addMovieModalHere = useSelector(addMovieModal);
  const getDeleteValueHere = useSelector(getDeleteValue);
  const AddQuoteModalHere = useSelector(addQuoteModal);
  const quoteDeleteConfirmationModalHere = useSelector(
    quoteDeleteConfirmationModal
  );
  return (
    <div
      className={` ${
        (showNewEmailModalHere ||
          addMovieModalHere ||
          getDeleteValueHere ||
          quoteDeleteConfirmationModalHere ||
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
