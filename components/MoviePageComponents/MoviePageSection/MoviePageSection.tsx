/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { setAddQuoteModal } from 'slices/quotesSlice';
import { useSelector } from 'react-redux';
import { getQuotes } from 'slices/quotesSlice';

export const MoviePageSection: React.FC<{ screenWidth: number }> = (props) => {
  const { t } = useTranslation('movies');
  const dispatch = useDispatch();
  const getQuotesHere = useSelector(getQuotes);
  return (
    <section className='w-full flex flex-col xl:flex-row-reverse xl:justify-end items-start justify-center gap-10 lg:gap-3'>
      <div
        onClick={() => dispatch(setAddQuoteModal(true))}
        className='flex lg:text-lg cursor-pointer rounded gap-2 bg-button-red px-3 items-center text-white py-2'
      >
        <img className='w-4 h-4' src='/assets/images/plus.png' alt='plus' />
        {t('add-quote')}
      </div>
      {props.screenWidth <= 1280 && (
        <hr className='w-full bg-[#54535A] opacity-25' />
      )}
      {props.screenWidth > 1280 && <p className='text-[#6C757D] text-2xl'>|</p>}
      <div className='mb-10 w-full xl:w-auto flex flex-col gap-2 xl:flex-row items-start xl:items-center'>
        <p className='text-white text-2xl'>{t('quotes')}</p>
        <p className='text-white lg:text-2xl'>
          ({t('total')} {getQuotesHere?.length})
        </p>
      </div>
    </section>
  );
};
export default MoviePageSection;
