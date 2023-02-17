/* eslint-disable @next/next/no-img-element */
import { GlobalLayout, PostCard, WriteQuoteAndSearch } from 'components';
import { useNewsFeedConfig } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PostType } from 'types';
import InfiniteScroll from 'react-infinite-scroll-component';

export const NewsFeed = () => {
  const { refetch, startRange, numberOfQuotes, quotes, i18n } =
    useNewsFeedConfig();

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
          {quotes !== undefined && (
            <InfiniteScroll
              className='flex flex-col justify-center items-center pb-8 gap-8'
              dataLength={quotes.length}
              next={refetch}
              scrollThreshold={0.9}
              hasMore={startRange < numberOfQuotes ? true : false}
              loader={
                <h4 className='text-white font-bold'>
                  {i18n.language === 'en' ? 'Loading' : 'იტვირთება'}...
                </h4>
              }
              endMessage={
                <p className='text-white font-bold text-center'>
                  <b>
                    {i18n.language === 'en'
                      ? 'You have seen all quotes, lad!'
                      : 'შენ უკვე ყველა ციტატა ნახე ყმაწვილო!'}
                  </b>
                </p>
              }
            >
              {posts}
            </InfiniteScroll>
          )}
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
