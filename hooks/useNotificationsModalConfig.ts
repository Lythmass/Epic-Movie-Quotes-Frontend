import { useFetchNotifications } from 'hooks';
import { useSelector } from 'react-redux';
import { getNotificationValues } from 'slices/newsFeedQuotesSlice';
import { useTranslation } from 'next-i18next';

export default function useNotificationsModalConfig() {
  useFetchNotifications();
  const notifications = useSelector(getNotificationValues);
  const { t } = useTranslation('news-feed');
  return { notifications, t };
}
