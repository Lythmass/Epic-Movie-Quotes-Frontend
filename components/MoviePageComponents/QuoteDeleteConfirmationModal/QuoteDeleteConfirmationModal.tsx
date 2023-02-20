import {
  setQuoteDeleteConfirmationModal,
  quoteDeleteConfirmationModal,
} from 'slices/quotesSlice';
import { useQuoteDelete } from 'hooks';
import { useSelector } from 'react-redux';

export const QuoteDeleteConfirmationModal = () => {
  const getId = useSelector(quoteDeleteConfirmationModal);
  const { deleteQuoteMutation, t, dispatch } = useQuoteDelete();
  return (
    <div className='w-full flex justify-center top-0 bg-frozen-bg h-screen absolute z-[100]'>
      <div className='w-full lg:h-[20rem] lg:w-[30rem] lg:mt-[10rem] lg:rounded-[0.625rem] bg-modal-bg h-full px-10 flex flex-col justify-center gap-16'>
        <h1 className='text-white font-bold text-2xl text-center'>
          {t('modal.make-sure-quote')}
        </h1>
        <div className='text-white text-lg flex justify-evenly gap-5 items-center w-full'>
          <div
            onClick={() => dispatch(setQuoteDeleteConfirmationModal(0))}
            className='cursor-pointer'
          >
            {t('modal.cancel')}
          </div>
          <div
            onClick={() => deleteQuoteMutation.mutate(getId)}
            className='cursor-pointer px-3 py-2 bg-button-red rounded'
          >
            {t('modal.delete')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDeleteConfirmationModal;
