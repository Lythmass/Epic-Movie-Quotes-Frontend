import { useFetchUserInfo } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
import { changeProfilePicture } from 'services';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';
import { ProfileHeaderType } from 'types';

export default function useProfileHeaderConfig(props: ProfileHeaderType) {
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
    if (
      props.saveProfilePicture === 'no' &&
      user !== undefined &&
      !props.hasChanged
    ) {
      if (user?.profile_picture !== null) {
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
  return {
    t,
    changeHandler,
    user,
    profileRef,
  };
}
