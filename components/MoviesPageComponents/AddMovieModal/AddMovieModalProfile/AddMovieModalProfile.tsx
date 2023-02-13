/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export const AddMovieModalProfile = () => {
  const user = useSelector(selectValue);
  return (
    <section>
      <div className='w-full flex items-center gap-4'>
        <img
          className='w-11 h-11 object-cover rounded-[50%]'
          src={
            user?.profile_picture !== null
              ? user?.profile_picture
              : '/assets/images/tlotr.png'
          }
          alt='profile picture'
        />
        <h1 className='text-white font-medium text-xl'>{user?.name}</h1>
      </div>
    </section>
  );
};

export default AddMovieModalProfile;
