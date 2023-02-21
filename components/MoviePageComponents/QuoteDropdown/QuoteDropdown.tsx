/* eslint-disable @next/next/no-img-element */
import { useQuoteDropdownConfig } from 'hooks';
import { QuoteDropdownType } from 'types';
import { useDispatch } from 'react-redux';
import {
  setEditQuote,
  setQuoteDeleteConfirmationModal,
  setViewQuote,
} from 'slices/quotesSlice';
import { useTranslation } from 'next-i18next';

export const QuoteDropdown: React.FC<QuoteDropdownType> = (props) => {
  const modalRef = useQuoteDropdownConfig(
    props.setShowDropdown,
    props.showDropdown,
    props.dotsRef
  );
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  return (
    <div
      ref={modalRef}
      className='absolute z-[1000] flex flex-col justify-center items-start gap-8 right-[1.93rem] bottom-[1.3rem] text-white bg-[#24222F] w-[15.5rem] h-[13rem] rounded-[0.625rem]'
    >
      <div
        onClick={() => {
          dispatch(setViewQuote(props.id));
        }}
        className='px-10 py-1 flex cursor-pointer w-full hover:bg-[#11101A] gap-4 items-center'
      >
        <img src='/assets/images/eye.png' alt='view' />
        <h1>{t('view-post')}</h1>
      </div>
      <div
        onClick={() => {
          dispatch(setEditQuote(props.id));
        }}
        className='px-10 py-1 flex cursor-pointer w-full hover:bg-[#11101A] gap-4 items-center'
      >
        <img src='/assets/images/pencil.png' alt='edit' />
        <h1>{t('edit')}</h1>
      </div>
      <div
        onClick={() => {
          dispatch(setQuoteDeleteConfirmationModal(props.id));
        }}
        className='px-10  py-1 flex cursor-pointer w-full hover:bg-[#11101A] gap-4 items-center'
      >
        <img src='/assets/images/delete.png' alt='delete' />
        <h1>{t('delete')}</h1>
      </div>
    </div>
  );
};

export default QuoteDropdown;
