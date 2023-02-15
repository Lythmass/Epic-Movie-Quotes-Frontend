import {
  GlobalLayout,
  MovieInstance,
  MoviePageHeader,
  AddMovieModal,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMoviesPageConfig } from 'hooks';
import { getMovies } from 'slices/moviesSlice';
import { useSelector } from 'react-redux';

export const Movies = () => {
  const { i18n, addMovieModalHere } = useMoviesPageConfig();
  const displayMovies = useSelector(getMovies)?.map(
    (movie: any, index: number) => {
      return (
        <MovieInstance
          key={index}
          id={movie.id}
          thumbnail={movie.thumbnail}
          title={movie.title[i18n.language]}
          year={movie.year}
          numberOfQuotes={movie.quotes.length}
        />
      );
    }
  );
  return (
    <GlobalLayout>
      <>
        {addMovieModalHere && <AddMovieModal />}
        <div className='w-full px-[2.4rem] py-4 font-medium h-full mt-[5.35rem]'>
          <MoviePageHeader total={useSelector(getMovies)?.length} />
          <div className='w-full flex justify-center lg:justify-end mt-[1.75rem] pb-[5.35rem]'>
            <div className='flex lg:w-[77%] xl:w-[77%] 2xl:w-[82%] flex-col items-center w-full gap-[3.75rem] sm:flex-row sm:flex-wrap sm:justify-start'>
              {displayMovies}
            </div>
          </div>
        </div>
      </>
    </GlobalLayout>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['profile', 'movies'])),
    },
  };
}

export default Movies;
