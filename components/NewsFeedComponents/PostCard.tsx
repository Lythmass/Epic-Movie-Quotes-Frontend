/* eslint-disable @next/next/no-img-element */
import { PostCardHeader, PostCardSection } from 'components';
import { PostType } from 'types';

export const PostCard: React.FC<PostType> = (props) => {
  return (
    <div className='w-full lg:rounded-xl lg:w-[50%] xl:w-[55rem] 2xl:w-[58.5rem] flex flex-col gap-4 px-8 py-7 bg-post-bg min-h-[20rem]'>
      <PostCardHeader movie={props.movie} thumbnail='' quote={props.quote} />
      <PostCardSection thumbnail={props.thumbnail} />
      <hr className='w-full text-[#EFEFEF4D] opacity-30' />
      <footer></footer>
    </div>
  );
};

export default PostCard;
