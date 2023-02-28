import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export default function useBurgerMenuConfig() {
  const { t } = useTranslation('profile');
  const username = useSelector(selectValue);
  const router = useRouter();
  const [image, setImage] = useState(username?.profile_picture || '');
  const [name, setName] = useState(username?.name || '');
  useEffect(() => {
    if (username != undefined) {
      setImage(username?.profile_picture);
      setName(username?.name);
    }
  }, [username]);
  return { t, router, image, name };
}
