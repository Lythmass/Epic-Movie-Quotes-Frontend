/* eslint-disable @next/next/no-img-element */
import {
  DisplayComments,
  PostCardHeader,
  PostCardSection,
  WriteComment,
} from 'components';
import useFetchComments from 'hooks/useFetchComments';
import { useSelector } from 'react-redux';
import { getComments } from 'slices/newsFeedQuotesSlice';
import { PostType } from 'types';
import { CommentType } from './CommentType';

export const PostCard: React.FC<PostType> = (props) => {
  const refetch = useFetchComments();
  const comments = useSelector(getComments);
  let commentsLength = 0;
  const displayComments = comments?.map(
    (comment: CommentType, index: number) => {
      if (props.id === comment.quote_id) {
        commentsLength++;
        return (
          <DisplayComments
            userProfilePic={comment.user.profile_picture}
            username={comment.user.name}
            comment={comment.comment}
            key={index}
          />
        );
      }
    }
  );
  return (
    <div className='w-full lg:rounded-xl lg:w-[37rem] xl:w-[55rem] 2xl:w-[58.5rem] flex flex-col gap-4 px-8 py-7 bg-post-bg min-h-[20rem]'>
      <PostCardHeader
        author={props.author}
        authorPicture={props.authorPicture}
        movie={props.movie}
        thumbnail=''
        quote={props.quote}
      />
      <PostCardSection
        numberOfQuotes={commentsLength}
        thumbnail={props.thumbnail}
        quoteId={props.id}
      />
      <hr className='w-full text-[#EFEFEF4D] opacity-30' />
      <footer>
        {displayComments}
        <WriteComment refetch={refetch} quoteId={props.id} />
      </footer>
    </div>
  );
};

export default PostCard;
