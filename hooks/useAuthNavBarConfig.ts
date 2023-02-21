import { useState } from 'react';
import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationModal } from 'slices/newsFeedQuotesSlice';
import { useSocket } from 'hooks';
import { useMutation } from 'react-query';
import { logoutUser } from 'services';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function useAuthNavBarConfig() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();
  const router = useRouter();
  const getNotificationModalHere = useSelector(getNotificationModal);
  const screenWidth = useWindowWidth();
  useSocket();
  const logoutMutation = useMutation(
    () => {
      return logoutUser();
    },
    {
      onSuccess: async () => {
        deleteCookie('XSRF-TOKEN');
        router.push('/');
      },
    }
  );
  return {
    burgerMenu,
    setBurgerMenu,
    t,
    dispatch,
    getNotificationModalHere,
    screenWidth,
    logoutMutation,
  };
}
