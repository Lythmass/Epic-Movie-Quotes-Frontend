import { DisplayCommentsType } from './DisplayCommentsType';

/* eslint-disable @next/next/no-img-element */
export const DisplayComments: React.FC<DisplayCommentsType> = (props) => {
  return (
    <div className='w-full pt-1'>
      <div className='w-full flex flex-col'>
        <div className='w-full flex items-center gap-6'>
          <img
            src={
              props.userProfilePic != undefined
                ? props.userProfilePic
                : '/assets/images/tlotr.png'
            }
            className='w-11 h-11 rounded-[50%] object-cover bg-center'
            alt='profile picture'
          />
          <div className='flex flex-col items-start'>
            <h1 className='text-white font-bold xl:text-xl'>
              {props.username}
            </h1>
          </div>
        </div>
        <div className='w-full pl-[4.25rem] xl:text-xl rounded-[0.625rem] text-white'>
          {props.comment}
        </div>
      </div>
      <hr className='bg-[#EFEFEF4D] opacity-30 my-6' />
    </div>
  );
};
export default DisplayComments;
