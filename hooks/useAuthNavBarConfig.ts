import { useState } from 'react';
import { useFetchNotifications, useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  getNotificationModal,
  getNotificationValues,
} from 'slices/newsFeedQuotesSlice';
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
  useFetchNotifications();
  const notifications = useSelector(getNotificationValues);
  const unreadNotifications = notifications?.filter(
    (notification) => !notification.is_read
  ).length;

  return {
    burgerMenu,
    setBurgerMenu,
    t,
    dispatch,
    getNotificationModalHere,
    screenWidth,
    logoutMutation,
    unreadNotifications,
  };
}
