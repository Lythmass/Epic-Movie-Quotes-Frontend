/* eslint-disable @next/next/no-img-element */
import {
  GlobalLayout,
  MovieDetails,
  MoviePageSection,
  UpdateDeleteMovie,
  DeleteConfirmationModal,
  EditMovieModal,
  AddQuoteModal,
  QuoteDeleteConfirmationModal,
  EditQuoteModal,
  ViewQuoteModal,
  NotificationsModal,
  RenderQuotes,
  RenderGenres,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMoviePageConfig } from 'hooks';
import Head from 'next/head';
import { hasCookie } from 'cookies-next';
export const Movie = () => {
  const {
    i18n,
    deleteMovie,
    screenWidth,
    movie,
    editMovie,
    addQuoteModalHere,
    quoteDeleteConfirmationModalHere,
    editQuoteHere,
    viewQuote,
    getNotificationsModalHere,
  } = useMoviePageConfig();

  return (
    <GlobalLayout>
      <>
        <Head>
          <title>{movie?.title[i18n.language == 'en' ? 'en' : 'ka']}</title>
        </Head>
        {getNotificationsModalHere && <NotificationsModal />}
        {deleteMovie && <DeleteConfirmationModal />}
        {editMovie && <EditMovieModal />}
        {addQuoteModalHere && <AddQuoteModal />}
        {editQuoteHere && <EditQuoteModal />}
        {quoteDeleteConfirmationModalHere && <QuoteDeleteConfirmationModal />}
        {viewQuote && <ViewQuoteModal />}
        <div className='pt-[5.35rem] overflow-x-hidden lg:pl-[15rem] xl:pl-[17rem] 2xl:pl-[20rem] h-full overflow-auto m-auto px-8'>
          <header className='w-full xl:flex-row flex flex-col items-start justify-center lg:justify-start gap-6 py-10'>
            <img
              className='rounded-xl w-full object-cover h-[18.75rem] xl:w-[50rem] lg:h-[27.5rem]'
              src={movie?.thumbnail}
              alt='thumbnail'
            />
            <div className='flex flex-col w-1/2 gap-6'>
              <div className='flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between w-full flex-wrap'>
                <h1 className='text-[#DDCCAA] text-2xl'>
                  {movie?.title[i18n.language == 'en' ? 'en' : 'ka']} (
                  {movie?.year})
                </h1>
                <UpdateDeleteMovie />
              </div>
              <div className='w-screen 2xl:w-full flex gap-2 pr-[2rem] flex-wrap'>
                <RenderGenres movie={movie} />
              </div>
              <MovieDetails
                director={movie?.director[i18n.language == 'en' ? 'en' : 'ka']}
                budget={movie?.budget}
                description={
                  movie?.description[i18n.language == 'en' ? 'en' : 'ka']
                }
              />
            </div>
          </header>
          <MoviePageSection screenWidth={screenWidth} />
          <div className='flex flex-col gap-8 mb-8'>
            <RenderQuotes />
          </div>
        </div>
      </>
    </GlobalLayout>
  );
};

export default Movie;

export async function getServerSideProps(context: any) {
  const code = !hasCookie('XSRF-TOKEN', context) ? 403 : 200;
  if (code == 403) {
    return {
      redirect: {
        permanent: false,
        destination: '/403',
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        'profile',
        'news-feed',
        'movies',
      ])),
    },
  };
}
