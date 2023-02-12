/* eslint-disable @next/next/no-img-element */
import { useDispatch } from 'react-redux';
import { setAddMovieModal } from 'slices/addMovieModalSlice';
import { useTranslation } from 'next-i18next';
export const AddMovieModalHeader = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  return (
    <header className='flex justify-center items-center'>
      <h1 className='text-white font-medium text-xl flex justify-center w-full'>
        {t('add-movie')}
      </h1>
      <img
        onClick={() => dispatch(setAddMovieModal(false))}
        className='w-[0.875rem] h-[0.875rem] cursor-pointer'
        src='/assets/images/close.png'
        alt='close'
      />
    </header>
  );
};

export default AddMovieModalHeader;
