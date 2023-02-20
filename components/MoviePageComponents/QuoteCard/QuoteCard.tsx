/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { QuoteDropdown } from 'components';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getComments, getLikes } from 'slices/newsFeedQuotesSlice';
import useFetchComments from 'hooks/useFetchComments';
import { useFetchLikes } from 'hooks';
import { QuoteCardType } from './QuoteCardType';

export const QuoteCard: React.FC<QuoteCardType> = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dotsRef = useRef<HTMLImageElement>(null);
  useFetchComments();
  useFetchLikes();
  const commentsLength = useSelector(getComments)?.filter(
    (comment) => comment.quote_id == props.id
  ).length;
  const likesLength = useSelector(getLikes)?.filter(
    (like) => like.quote_id == props.id
  ).length;

  return (
    <div className='w-screen sm:w-[70%] xl:w-[49rem] xl:rounded-[0.625rem] translate-x-[-2rem] sm:translate-x-[0] bg-[#11101A]'>
      <div className='w-full px-8 mt-3 flex flex-col gap-5'>
        <div className='w-full flex flex-col gap-6 xl:flex-row'>
          <img
            className='w-full xl:w-[22rem] h-[8.75rem] object-cover rounded-sm'
            src={props.thumbnail}
            alt='thumbnail'
          />
          <i className='text-white text-2xl break-words'>
            &#34;{props.quote}&#34;
          </i>
        </div>
        <hr className='w-full bg-[#EFEFEF33] opacity-20' />
        <div className='flex justify-between items-center mb-4'>
          <div className='flex gap-6 items-center'>
            <div className='text-white flex gap-3 items-center'>
              <p>{commentsLength}</p>
              <img src='/assets/images/chat.png' alt='comments' />
            </div>
            <div className='text-white flex gap-3 items-center'>
              <p>{likesLength}</p>
              <img src='/assets/images/heart.png' alt='comments' />
            </div>
          </div>
          <img
            onClick={() => setShowDropdown(true)}
            className='cursor-pointer'
            ref={dotsRef}
            src='/assets/images/dots.png'
            alt='more'
          />
          {showDropdown && (
            <QuoteDropdown
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              dotsRef={dotsRef}
              id={props.id}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default QuoteCard;
