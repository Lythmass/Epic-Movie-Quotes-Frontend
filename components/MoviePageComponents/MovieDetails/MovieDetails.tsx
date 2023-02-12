import { MovieDetailsType } from './MovieDetailsType';
import { useTranslation } from 'next-i18next';

export const MovieDetails: React.FC<MovieDetailsType> = (props) => {
  const { t } = useTranslation('movies');
  return (
    <div className='w-full text-white flex flex-col gap-5'>
      <h1 className='flex gap-2 font-medium text-lg'>
        <span className='text-[#CED4DA] wi'>{t('director')}:</span>{' '}
        {props.director}
      </h1>
      <h1 className='flex gap-2 font-medium text-lg'>
        <span className='text-[#CED4DA]'>{t('budget')}:</span> {props.budget}
      </h1>
      <p className='xl:w-[30rem] text-[#CED4DA] leading-7 text-lg'>
        {props.description}
      </p>
    </div>
  );
};

export default MovieDetails;
