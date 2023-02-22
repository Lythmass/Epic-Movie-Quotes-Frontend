/* eslint-disable @next/next/no-img-element */
import {
  AddNewPostModal,
  GlobalLayout,
  NotificationsModal,
  PostCard,
  SearchModal,
  WriteQuoteAndSearch,
} from 'components';
import { useNewsFeedConfig } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { PostType } from 'types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { hasCookie } from 'cookies-next';

export const NewsFeed = () => {
  const {
    refetch,
    numberOfQuotes,
    quotes,
    i18n,
    getAddPostModalHere,
    getSearchModalHere,
    searchType,
    getNotificationModalHere,
  } = useNewsFeedConfig();
  const posts = quotes?.map((quote: PostType, index: number) => {
    return (
      <PostCard
        movie={quote.movie}
        quote={quote.quote}
        id={quote.id}
        author={quote.user?.name}
        authorPicture={quote.user?.profile_picture}
        key={index}
        thumbnail={quote.thumbnail}
      />
    );
  });
  return (
    <GlobalLayout>
      <>
        <Head>
          <title>News feed</title>
        </Head>
        {getAddPostModalHere && <AddNewPostModal />}
        {getSearchModalHere && <SearchModal />}
        {getNotificationModalHere && <NotificationsModal />}
        <div className='w-full h-full pt-[5.35rem]'>
          <WriteQuoteAndSearch />
          <div className='flex flex-col justify-center items-center pb-8 gap-8'>
            {quotes !== undefined && (
              <InfiniteScroll
                className='flex w-[100vw] flex-col justify-center items-center pb-8 gap-8'
                dataLength={quotes.length}
                next={() => refetch(false)}
                scrollThreshold={0.9}
                hasMore={
                  !searchType
                    ? quotes?.length < numberOfQuotes
                      ? true
                      : false
                    : false
                }
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
      </>
    </GlobalLayout>
  );
};

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
        'movies',
        'news-feed',
      ])),
    },
  };
}

export default NewsFeed;
