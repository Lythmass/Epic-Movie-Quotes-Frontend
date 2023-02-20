/* eslint-disable @next/next/no-img-element */
import { useNewsFeedSearch } from 'hooks';
import { setSearchModal } from 'slices/newsFeedQuotesSlice';

export const SearchModal = () => {
  const { refetch, t, search, searchType, searchHandler, dispatch } =
    useNewsFeedSearch();
  return (
    <div className='w-full absolute z-[100] bg-[#12101A] h-full'>
      <div className='flex gap-6 text-white items-center justify-start px-8 py-5'>
        <img
          onClick={() => {
            dispatch(setSearchModal(false));
            refetch(true);
          }}
          className='cursor-pointer'
          src='/assets/images/go-back.png'
          alt='close'
        />
        <input
          onChange={searchHandler}
          defaultValue={`${searchType ? `${searchType}${search}` : ''}`}
          placeholder={`${t('mobile-search.search')}`}
          className='placeholder-white bg-inherit outline-none'
        />
      </div>
      <hr className='w-full bg-[#EFEFEF4D] opacity-30' />
      <div className='flex flex-col gap-[1.375rem] mt-5 px-[4.375rem]'>
        <h1 className='text-[#CED4DA]'>
          {t('mobile-search.enter')} <span className='text-white'>@</span>{' '}
          {t('mobile-search.movies')}
        </h1>
        <h1 className='text-[#CED4DA]'>
          {t('mobile-search.enter')} <span className='text-white'>#</span>{' '}
          {t('mobile-search.quotes')}
        </h1>
      </div>
    </div>
  );
};
export default SearchModal;
