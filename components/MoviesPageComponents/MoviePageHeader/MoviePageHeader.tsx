/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { setAddMovieModal } from 'slices/addMovieModalSlice';

export const MoviePageHeader: React.FC<{ total: number }> = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  return (
    <header className='flex justify-end w-[98.24%]'>
      <div className='w-full lg:w-[77%] xl:w-[77%] 2xl:w-[82%]'>
        <div className='flex w-full items-center justify-between mt-4'>
          <h1 className='text-white text-2xl'>{t('movies-list')}</h1>
          <div
            onClick={() => dispatch(setAddMovieModal(true))}
            className='flex gap-2 items-center text-white bg-button-red px-3 py-2 rounded cursor-pointer'
          >
            <img className='w-4' src='/assets/images/plus.png' alt='add' />
            {t('add-movie')}
          </div>
        </div>
        <p className='text-white'>
          ({t('total')} {props.total})
        </p>
      </div>
    </header>
  );
};
export default MoviePageHeader;
