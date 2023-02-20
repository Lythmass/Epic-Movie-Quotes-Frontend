import { useViewQuoteModalHeaderConfig } from 'hooks';
import {
  setEditQuote,
  setQuoteDeleteConfirmationModal,
  setViewQuote,
} from 'slices/quotesSlice';

/* eslint-disable @next/next/no-img-element */
export const ViewQuoteModalHeader: React.FC<{ quoteId: number }> = (props) => {
  const { dispatch, windowSize, t } = useViewQuoteModalHeaderConfig();
  return (
    <>
      <div className='w-full py-10 px-8 flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <img
            onClick={() => {
              dispatch(setViewQuote(0));
              dispatch(setEditQuote(props.quoteId));
            }}
            src='/assets/images/pencil.png'
            className='cursor-pointer'
            alt='edit'
          />
          <span className='text-white'>|</span>
          <img
            onClick={() => {
              dispatch(setViewQuote(0));
              dispatch(setQuoteDeleteConfirmationModal(props.quoteId));
            }}
            src='/assets/images/delete.png'
            className='cursor-pointer'
            alt='edit'
          />
        </div>
        {windowSize > 1024 && (
          <h1 className='text-white text-2xl font-medium'>{t('view-quote')}</h1>
        )}
        <img
          onClick={() => dispatch(setViewQuote(0))}
          className='cursor-pointer'
          src='/assets/images/close.png'
          alt='close'
        />
      </div>
      <hr className='w-full bg-[#EFEFEF] opacity-20' />
    </>
  );
};
export default ViewQuoteModalHeader;
