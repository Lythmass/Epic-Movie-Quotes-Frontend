/* eslint-disable @next/next/no-img-element */
import { useWriteQuoteAndSearchConfig } from 'hooks';
import { setAddPostModal, setSearchModal } from 'slices/newsFeedQuotesSlice';

export const WriteQuoteAndSearch = () => {
  const {
    windowWidth,
    searchGrow,
    t,
    search,
    searchType,
    setSearchGrow,
    submit,
    searchHandler,
    dispatch,
  } = useWriteQuoteAndSearchConfig();
  return (
    <div className='w-full py-[1.5rem] gap-6 px-8 lg:px-0 flex flex-col justify-center items-start lg:flex-row lg:items-center'>
      <div className='w-full flex items-center lg:w-[37rem] xl:w-[55rem] 2xl:w-[58.5rem]'>
        <div className='w-full lg:gap-6 flex lg:flex-row flex-col gap-5 items-start lg:justify-between lg:items-center'>
          <div
            onClick={() => dispatch(setAddPostModal(true))}
            className={`lg:px-4 transition-all ${
              !searchGrow && 'grow'
            } lg:rounded-[0.625rem] lg:bg-write-quote-bg lg:h-[3.25rem] h-full flex items-center justify-start gap-3`}
          >
            <img
              className='cursor-pointer'
              src='/assets/images/note.png'
              alt='write quote'
            />
            <h1 className='text-white cursor-pointer lg:text-xl'>
              {t('new-quote')}
            </h1>
          </div>
          {windowWidth < 1024 && (
            <div
              onClick={() => dispatch(setSearchModal(true))}
              className='flex gap-4 items-center'
            >
              <img
                className='cursor-pointer'
                src='/assets/images/search.png'
                alt='search'
              />
              <h1 className='text-white lg:text-xl cursor-pointer'>
                {t('search-by')}
              </h1>
            </div>
          )}
          {windowWidth >= 1024 && (
            <form
              onSubmit={submit}
              onClick={() => setSearchGrow(true)}
              onBlur={() => setSearchGrow(false)}
              className={`flex transition-all gap-4 flex-col ${
                searchGrow && 'grow'
              }`}
            >
              <div className='flex gap-4 items-center'>
                <img src='/assets/images/search.png' alt='search' />
                <input
                  defaultValue={`${searchType ? `${searchType}${search}` : ''}`}
                  onChange={searchHandler}
                  className={`${
                    searchGrow ? 'w-full' : 'w-24'
                  } text-white bg-inherit outline-none lg:text-xl`}
                  placeholder={`${searchGrow ? t('search') : t('search-by')}`}
                />
              </div>
              {searchGrow && (
                <hr className='w-full bg-[#EFEFEF4D] opacity-30' />
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default WriteQuoteAndSearch;
