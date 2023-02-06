/* eslint-disable @next/next/no-img-element */
import { useFetchUserInfo } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
import { changeProfilePicture } from 'services';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export default function ProfileHeader(props: {
  setHasChanged: (value: boolean) => void;
  setSaveProfilePicture: (value: string) => void;
  saveProfilePicture: string;
}) {
  const [file, setFile] = useState();
  const refetch = useFetchUserInfo();
  const changeProfilePictureMutation = useMutation(
    (data) => {
      return changeProfilePicture({ image: data });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  const user = useSelector(selectValue);
  const { t } = useTranslation('profile');
  const profileRef = useRef<HTMLImageElement>(null);
  const changeHandler = async (event: any) => {
    profileRef.current!.src = URL.createObjectURL(event.target.files[0]);
    props.setHasChanged(true);
    props.setSaveProfilePicture('prepare');
    setFile(event.target.files[0]);
  };
  useEffect(() => {
    if (props.saveProfilePicture === 'no' && user !== undefined) {
      if (user?.profile_picture !== 'null') {
        profileRef.current!.src = user?.profile_picture;
      } else {
        profileRef.current!.src = '/assets/images/tlotr.png';
      }
    }
    if (props.saveProfilePicture === 'yes') {
      changeProfilePictureMutation.mutate(file);
      props.setSaveProfilePicture('no');
    }
  }, [props.saveProfilePicture]);
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
