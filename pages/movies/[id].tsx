/* eslint-disable @next/next/no-img-element */
import {
  GlobalLayout,
  DisplayGenres,
  MovieDetails,
  MoviePageSection,
  UpdateDeleteMovie,
  DeleteConfirmationModal,
  EditMovieModal,
  AddQuoteModal,
  QuoteCard,
  QuoteDeleteConfirmationModal,
  EditQuoteModal,
  ViewQuoteModal,
  NotificationsModal,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMoviePageConfig } from 'hooks';
import Head from 'next/head';
export const Movie = () => {
  const {
    t,
    i18n,
    deleteMovie,
    screenWidth,
    movie,
    editMovie,
    addQuoteModalHere,
    getQuotesHere,
    quoteDeleteConfirmationModalHere,
    editQuoteHere,
    viewQuote,
    getNotificationsModalHere,
  } = useMoviePageConfig();
  const displayGenres = movie?.genres.map(
    (genre: { name: string }, index: number) => {
      return <DisplayGenres key={index} name={t('genres.' + genre.name)} />;
    }
  );
  const displayQuotes = getQuotesHere?.map(
    (
      quote: {
        thumbnail: string;
        id: number;
        quote: { en: string; ka: string };
      },
      index: number
    ) => {
      return (
        <QuoteCard
          key={index}
          id={quote.id}
          quote={quote.quote[i18n.language === 'en' ? 'en' : 'ka']}
          thumbnail={quote.thumbnail}
        />
      );
    }
  );
  return (
    <GlobalLayout>
      <>
        <Head>
          <title>{movie?.title[i18n.language]}</title>
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
                  {movie?.title[i18n.language]} ({movie?.year})
                </h1>
                <UpdateDeleteMovie />
              </div>
              <div className='w-screen 2xl:w-full flex gap-2 pr-[2rem] flex-wrap'>
                {displayGenres}
              </div>
              <MovieDetails
                director={movie?.director[i18n.language]}
                budget={movie?.budget}
                description={movie?.description[i18n.language]}
              />
            </div>
          </header>
          <MoviePageSection screenWidth={screenWidth} />
          <div className='flex flex-col gap-8 mb-8'>{displayQuotes}</div>
        </div>
      </>
    </GlobalLayout>
  );
};

export default Movie;

export async function getServerSideProps(context: any) {
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
