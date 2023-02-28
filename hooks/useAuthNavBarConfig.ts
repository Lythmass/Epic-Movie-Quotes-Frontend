import { useEffect, useState } from 'react';
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
import { selectValue } from 'slices/userInfoSlice';
import { NotificationType } from 'types';

export default function useAuthNavBarConfig() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();
  const user = useSelector(selectValue);
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
        if (process.env.NEXT_PUBLIC_API_URL?.substring(0, 5) == 'http:') {
          deleteCookie('XSRF-TOKEN');
        } else {
          deleteCookie('XSRF-TOKEN', {
            path: '/',
            domain: process.env.NEXT_PUBLIC_DOMAIN,
          });
        }
        router.push('/');
      },
    }
  );
  useFetchNotifications();
  const notifications = useSelector(getNotificationValues);
  useEffect(() => {
    if (user != undefined && notifications != undefined) {
      setUnreadNotifications(
        notifications?.filter(
          (notification: NotificationType) =>
            !notification.is_read && notification.author != user?.name
        ).length
      );
    }
  }, [user, notifications]);
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
