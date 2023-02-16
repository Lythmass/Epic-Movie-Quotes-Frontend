/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, getMovies } from 'slices/moviesSlice';
import { setAddMovieModal } from 'slices/addMovieModalSlice';
import { MovieType } from 'types';
import { useEffect, useState } from 'react';

export const MoviePageHeader: React.FC<{ total: number }> = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const { t } = useTranslation('movies');
  const [originalMovies, setOriginalMovies] = useState([]);
  useEffect(() => {
    if (movies?.length > originalMovies.length) {
      setOriginalMovies(movies);
    }
  }, [movies]);

  const searchHandler = (event: any) => {
    dispatch(
      setMovies(
        originalMovies?.filter(
          (movie: MovieType) =>
            event.target.value ===
            movie.title.en.substring(0, event.target.value.length)
        )
      )
    );
  };

  return (
    <header className='flex justify-end w-[98.24%]'>
      <div className='w-full lg:w-[77%] xl:w-[77%] 2xl:w-[82%]'>
        <div className='flex w-full items-center justify-between mt-4'>
          <h1 className='text-white text-2xl'>{t('movies-list')}</h1>
          <div className='flex gap-8 items-center justify-end'>
            <div className='flex gap-4 items-center'>
              <img src='/assets/images/search.png' alt='search' />
              <input
                onChange={searchHandler}
                type='text'
                className='text-white focus:w-[20rem] transition-all text-xl w-[6.25rem] placeholder-white bg-transparent outline-none'
                placeholder='Search'
              />
            </div>
            <div
              onClick={() => dispatch(setAddMovieModal(true))}
              className='flex gap-2 items-center text-white bg-button-red px-3 py-2 rounded cursor-pointer'
            >
              <img className='w-4' src='/assets/images/plus.png' alt='add' />
              {t('add-movie')}
            </div>
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
