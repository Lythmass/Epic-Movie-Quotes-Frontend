import { useTranslation } from 'next-i18next';

/* eslint-disable @next/next/no-img-element */
export const WriteQuoteAndSearch = () => {
  const { t } = useTranslation('news-feed');
  return (
    <div className='w-full py-[1.5rem] gap-6 px-8 lg:px-0 flex flex-col justify-center items-start lg:flex-row lg:items-center'>
      <div className='w-full lg:px-4 lg:rounded-[0.625rem] lg:bg-write-quote-bg lg:h-[3.25rem] lg:w-[36%] xl:w-[45.5rem] 2xl:w-[49rem] h-full flex items-center justify-start gap-3'>
        <img
          className='cursor-pointer'
          src='/assets/images/note.png'
          alt='write quote'
        />
        <h1 className='text-white cursor-pointer lg:text-xl'>
          {t('new-quote')}
        </h1>
      </div>
      <div className='flex gap-4 items-center'>
        <img
          className='cursor-pointer'
          src='/assets/images/search.png'
          alt='search'
        />
        <h1 className='text-white lg:text-xl cursor-pointer'>
          {t('search-by')}
        </h1>
      </div>
    </div>
  );
};
export default WriteQuoteAndSearch;
