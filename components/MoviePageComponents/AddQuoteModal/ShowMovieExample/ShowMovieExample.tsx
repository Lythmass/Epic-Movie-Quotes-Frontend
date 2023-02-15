/* eslint-disable @next/next/no-img-element */
import { MovieType } from 'types';
import { useTranslation } from 'next-i18next';
import { DisplayGenres } from 'components';
import { useWindowWidth } from 'hooks';

export const ShowMovieExample: React.FC<{ movie: MovieType }> = (props) => {
  const { t, i18n } = useTranslation('movies');
  const windowSize = useWindowWidth();
  const displayGenres = props.movie?.genres?.map(
    (genre: { name: string }, index: number) => {
      if (windowSize < 1440) {
        return (
          <DisplayGenres
            key={index}
            size='small'
            name={t('genres.' + genre.name)}
          />
        );
      } else {
        return <DisplayGenres key={index} name={t('genres.' + genre.name)} />;
      }
    }
  );
  return (
    <div className='w-full mt-6 flex 2xl:items-center 2xl:gap-5 gap-3 2xl:bg-inherit bg-black min-h-[7.124rem] rounded px-2 py-4'>
      <img
        className='rounded-[0.625rem] h-[5.125rem] object-cover 2xl:h-[10rem] w-[7rem] 2xl:w-[24.625rem]'
        src={props.movie?.thumbnail}
        alt='movie'
      />
      <div className='w-full flex flex-col 2xl:gap-3 items-start gap-[0.45rem]'>
        <h1 className='text-[#DDCCAA] 2xl:text-2xl'>
          {i18n.language === 'en'
            ? props.movie.title?.en
            : props.movie.title?.ka}
          <span className='pl-1'>({props.movie?.year})</span>
        </h1>
        <p className='text-white font-bold 2xl:text-lg'>
          <span className='pr-2'>{t('director')}:</span>
          {i18n.language === 'en'
            ? props.movie.director?.en
            : props.movie.director?.ka}
        </p>
        <div className='w-full flex gap-2 pr-[2rem] flex-wrap'>
          {displayGenres}
        </div>
      </div>
    </div>
  );
};

export default ShowMovieExample;
