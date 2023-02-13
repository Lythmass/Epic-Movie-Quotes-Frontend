/* eslint-disable @next/next/no-img-element */
import {
  GlobalLayout,
  DisplayGenres,
  MovieDetails,
  MoviePageSection,
  UpdateDeleteMovie,
  DeleteConfirmationModal,
  EditMovieModal,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMoviePageConfig } from 'hooks';
export const Movie = () => {
  const { t, i18n, deleteMovie, screenWidth, movie, editMovie } =
    useMoviePageConfig();
  const displayGenres = movie?.genres.map(
    (genre: { name: string }, index: number) => {
      return <DisplayGenres key={index} name={t('genres.' + genre.name)} />;
    }
  );
  return (
    <GlobalLayout>
      <>
        {deleteMovie && <DeleteConfirmationModal />}
        {editMovie && <EditMovieModal />}
        <div className='pt-[5.35rem] lg:pl-[15rem] xl:pl-[17rem] 2xl:pl-[20rem] h-full overflow-auto m-auto px-8'>
          <header className='w-full xl:flex-row flex flex-col items-start justify-center lg:justify-start gap-6 py-10'>
            <img
              className='rounded-xl w-full object-cover h-[18.75rem] xl:w-[50rem] lg:h-[27.5rem]'
              src={movie?.thumbnail}
              alt='thumbnail'
            />
            <div className='flex flex-col w-1/2 gap-6'>
              <div className='flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between w-full flex-wrap'>
                <h1 className='text-[#DDCCAA] text-2xl'>
                  {movie?.title[i18n.language]} ({movie?.year})
                </h1>
                <UpdateDeleteMovie />
              </div>
              <div className='w-full flex gap-2 flex-wrap'>{displayGenres}</div>
              <MovieDetails
                director={movie?.director[i18n.language]}
                budget={movie?.budget}
                description={movie?.description[i18n.language]}
              />
            </div>
          </header>
          <MoviePageSection screenWidth={screenWidth} />
        </div>
      </>
    </GlobalLayout>
  );
};

export default Movie;

export async function getServerSideProps(context: any) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['profile', 'movies'])),
    },
  };
}
