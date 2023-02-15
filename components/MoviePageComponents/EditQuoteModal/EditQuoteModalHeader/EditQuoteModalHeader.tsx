/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import {
  setQuoteDeleteConfirmationModal,
  setEditQuote,
} from 'slices/quotesSlice';
export const EditQuoteModalHeader: React.FC<{ quote: { id: number } }> = (
  props
) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  return (
    <header className='p-8 flex justify-between items-center'>
      <img
        onClick={() =>
          dispatch(setQuoteDeleteConfirmationModal(props.quote?.id))
        }
        className='cursor-pointer'
        src='/assets/images/delete.png'
        alt='delete'
      />
      <h1 className='text-white text-xl font-medium'>{t('edit-quote')}</h1>
      <img
        className='cursor-pointer'
        onClick={() => dispatch(setEditQuote(0))}
        src='/assets/images/close.png'
        alt='close'
      />
    </header>
  );
};

export default EditQuoteModalHeader;
