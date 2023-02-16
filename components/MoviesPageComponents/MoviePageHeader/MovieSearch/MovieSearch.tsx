import { useTranslation } from 'next-i18next';

/* eslint-disable @next/next/no-img-element */
export const MovieSearch: React.FC<{ searchHandler: (event: any) => void }> = (
  props
) => {
  const { t } = useTranslation('movies');
  return (
    <div className='flex gap-4 items-center'>
      <img src='/assets/images/search.png' alt='search' />
      <input
        onChange={props.searchHandler}
        type='text'
        className='text-white focus:w-[20rem] transition-all text-xl w-[6.25rem] placeholder-white bg-transparent outline-none'
        placeholder={`${t('search')}`}
      />
    </div>
  );
};
export default MovieSearch;
