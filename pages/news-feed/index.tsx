/* eslint-disable @next/next/no-img-element */
import { GlobalLayout, PostCard, WriteQuoteAndSearch } from 'components';
import { useFetchNewsFeedQuotes, useFetchUserInfo } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector } from 'react-redux';
import { getQuotes } from 'slices/newsFeedQuotesSlice';
import { PostType } from 'types';

export const NewsFeed = () => {
  useFetchUserInfo();
  useFetchNewsFeedQuotes();
  const quotes = useSelector(getQuotes);
  const posts = quotes?.map((quote: PostType, index: number) => {
    return (
      <PostCard
        movie={quote.movie}
        quote={quote.quote}
        key={index}
        thumbnail={quote.thumbnail}
      />
    );
  });
  return (
    <GlobalLayout>
      <div className='w-full h-full pt-[5.35rem]'>
        <WriteQuoteAndSearch />
        <div className='flex flex-col justify-center items-center pb-8 gap-8'>
          {posts}
        </div>
      </div>
    </GlobalLayout>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        'profile',
        'movies',
        'news-feed',
      ])),
    },
  };
}

export default NewsFeed;
