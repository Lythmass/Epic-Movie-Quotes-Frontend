import { useState } from 'react';
import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationModal } from 'slices/newsFeedQuotesSlice';
import { useSocket } from 'hooks';

export default function useAuthNavBarConfig() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();
  const getNotificationModalHere = useSelector(getNotificationModal);
  const screenWidth = useWindowWidth();
  useSocket();
  return {
    burgerMenu,
    setBurgerMenu,
    t,
    dispatch,
    getNotificationModalHere,
    screenWidth,
  };
}
