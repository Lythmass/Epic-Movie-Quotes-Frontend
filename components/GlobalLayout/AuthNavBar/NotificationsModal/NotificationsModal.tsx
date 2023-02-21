/* eslint-disable @next/next/no-img-element */
import { useNotificationsModalConfig } from 'hooks';
import { DisplayNotifications } from 'components';
import { NotificationType } from 'types';

export const NotificationsModal = () => {
  const { notifications, t, markAllAsReadMutation } =
    useNotificationsModalConfig();
  const displayNotifications = notifications?.map(
    (notification: NotificationType, index: number) => {
      return (
        <DisplayNotifications
          key={index}
          author_profile_picture={notification.author_profile_picture}
          author={notification.author}
          is_read={notification.is_read}
          is_comment={notification.is_comment}
          created_at={notification.created_at}
        />
      );
    }
  );
  return (
    <div className='w-full lg:rounded-xl lg:top-[5.8rem] lg:w-[30rem] xl:w-[60rem] xl:h-[44.2rem] lg:h-[34.2rem] lg:right-16 fixed overflow-auto z-[99] pt-[5.35rem] lg:pt-0 bg-black h-screen'>
      <div className='px-8 py-6 flex flex-col lg:justify-start gap-6'>
        <div className='flex items-center text-white justify-between'>
          <h1 className='text-xl font-medium'>
            {t('notifications.notifications')}
          </h1>
          <p
            onClick={() => markAllAsReadMutation.mutate()}
            className='text-sm underline cursor-pointer'
          >
            {t('notifications.mark')}
          </p>
        </div>
        <div className='flex flex-col gap-2'>{displayNotifications}</div>
      </div>
    </div>
  );
};
export default NotificationsModal;
