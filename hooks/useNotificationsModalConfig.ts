import { useFetchNotifications } from 'hooks';
import { useSelector } from 'react-redux';
import { getNotificationValues } from 'slices/newsFeedQuotesSlice';
import { useTranslation } from 'next-i18next';
import { markAllAsRead } from 'services';
import { useMutation } from 'react-query';

export default function useNotificationsModalConfig() {
  const refetch = useFetchNotifications();
  const notifications = useSelector(getNotificationValues);
  const { t } = useTranslation('news-feed');
  const markAllAsReadMutation = useMutation(
    () => {
      return markAllAsRead();
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  return { notifications, t, markAllAsReadMutation };
}
