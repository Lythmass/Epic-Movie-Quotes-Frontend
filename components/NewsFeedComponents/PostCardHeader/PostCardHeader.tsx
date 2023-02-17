/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';
import { PostType } from 'types';

export const PostCardHeader: React.FC<PostType> = (props) => {
  const user = useSelector(selectValue);
  const { i18n } = useTranslation();
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4 items-center'>
        <img
          className='rounded-[50%] w-11 h-11 bg-center object-cover'
          src={user?.profile_picture}
          alt='profile picture'
        />
        <h1 className='text-white'>{user?.name}</h1>
      </div>
      <div className='flex lg:text-xl gap-2'>
        <i className='text-white'>
          &#34;{props.quote[i18n.language === 'en' ? 'en' : 'ka']}&#34;
        </i>
        <h1 className='text-[#DDCCAA]'>
          - {props.movie.title[i18n.language === 'en' ? 'en' : 'ka']}.
        </h1>
        <h1 className='text-white'>({props.movie.year})</h1>
      </div>
    </div>
  );
};
export default PostCardHeader;
