/* eslint-disable @next/next/no-img-element */
import {
  AddMovieModalProfile,
  DisplayComments,
  ViewQuoteModalHeader,
  WriteComment,
} from 'components';
import { useViewQuoteModalConfig } from 'hooks';

export const ViewQuoteModal = () => {
  const { refetch, quote, comments, likesLength, quoteId } =
    useViewQuoteModalConfig();
  const displayComments = comments?.map((comment, index: number) => {
    return (
      <DisplayComments
        userProfilePic={comment.user.profile_picture}
        username={comment.user.name}
        comment={comment.comment}
        key={index}
      />
    );
  });
  return (
    <div className='w-full h-screen flex justify-center absolute z-[100] top-0 bg-frozen-bg'>
      <div className='w-full h-full bg-[#11101A] overflow-auto lg:w-[40rem] 2xl:w-[60rem] 2xl:h-[50rem] lg:rounded-xl lg:h-[45rem] lg:mt-[5rem]'>
        <ViewQuoteModalHeader quoteId={quoteId} />
        <div className='w-full px-8 py-10'>
          <AddMovieModalProfile />
          <div className='w-full flex flex-col gap-4 mt-10'>
            <div className='w-full flex justify-between px-3 py-2 h-20 xl:h-auto border border-[#6C757D] rounded'>
              <i className='text-[#CED4DA]'>&#34;{quote?.quote.en}&#34;</i>
              <p className='text-[#6C757D]'>Eng</p>
            </div>
            <div className='w-full flex justify-between px-3 py-2 h-20 xl:h-auto border border-[#6C757D] rounded'>
              <i className='text-[#CED4DA]'>&#34;{quote?.quote.ka}&#34;</i>
              <p className='text-[#6C757D]'>ქარ</p>
            </div>
            <img
              className='w-full xl:h-[32rem] mt-1 rounded-[0.625rem] h-[18.875rem] object-cover'
              src={quote?.thumbnail}
              alt='thumbnail'
            />
          </div>
          <footer className='w-full flex flex-col gap-4'>
            <div className='flex gap-6 mt-6'>
              <div className='flex gap-3 items-center'>
                <p className='text-white text-xl'>{comments?.length}</p>
                <img src='/assets/images/chat.png' alt='comments' />
              </div>
              <div className='flex gap-3 items-center'>
                <p className='text-white text-xl'>{likesLength}</p>
                <img
                  className='cursor-pointer transition-all w-6'
                  src='/assets/images/heart.png'
                  alt='comments'
                />
              </div>
            </div>
            <hr className='w-full bg-white opacity-20' />
            <div>{displayComments}</div>
            <WriteComment refetch={refetch} quoteId={quoteId} />
          </footer>
        </div>
      </div>
    </div>
  );
};
export default ViewQuoteModal;
