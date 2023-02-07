/* eslint-disable @next/next/no-img-element */
import { useProfileHeaderConfig } from 'hooks';

export default function ProfileHeader(props: {
  setHasChanged: (value: boolean) => void;
  setSaveProfilePicture: (value: string) => void;
  saveProfilePicture: string;
}) {
  const { t, changeHandler, user, profileRef } = useProfileHeaderConfig(props);

  return (
    <div className='text-center lg:absolute lg:top-[-6rem] flex flex-col justify-center items-center gap-2'>
      <img
        className='w-[11.75rem] h-[11.75rem] rounded-[50%] object-cover'
        src={
          user?.profile_picture !== 'null'
            ? user?.profile_picture
            : '/assets/images/tlotr.png'
        }
        alt='profile picture'
        ref={profileRef}
      />
      <label htmlFor='upload' className='cursor-pointer text-xl'>
        {t('upload')}
      </label>
      <input
        onChange={changeHandler}
        className='hidden'
        type='file'
        accept='image/jpg, image/png, image/jpg'
        id='upload'
      />
    </div>
  );
}
