import { useTranslation } from 'next-i18next';
import { NotificationType } from 'types';

/* eslint-disable @next/next/no-img-element */
export const DisplayNotifications: React.FC<NotificationType> = (props) => {
  const now = new Date().getTime();
  const givenDate = new Date(props.created_at).getTime();
  const calculateDate = Math.floor((now - givenDate) / 1000 / 60);
  const { t } = useTranslation('news-feed');
  return (
    <div className='w-full py-5 px-4 flex gap-3 rounded border border-[#6C757D80]'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img
          className={`${
            !props.is_read && 'border-2 border-[#198754]'
          } rounded-[50%] w-[3.75rem] h-[3.75rem] object-cover`}
          src={props.author_profile_picture}
          alt='profile picture'
        />
        {!props.is_read && (
          <h1 className='text-[#198754]'>{t('notifications.new')}</h1>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-white text-xl'>{props.author}</h1>
        {props.is_comment == true && (
          <div className='flex gap-3 items-center'>
            <img
              className='w-6 h-6'
              src='/assets/images/quote.png'
              alt='commented'
            />
            <p className='text-[#CED4DA]'>{t('notifications.comment')}</p>
          </div>
        )}
        {props.is_comment != true && (
          <div className='flex gap-3 items-center'>
            <img
              className='w-6 h-6'
              src='/assets/images/heart-fill.png'
              alt='likes'
            />
            <p className='text-[#CED4DA]'>{t('notifications.like')}</p>
          </div>
        )}
        <p className='text-[#D9D9D9]'>
          {calculateDate} {t('notifications.ago')}
        </p>
      </div>
    </div>
  );
};

export default DisplayNotifications;
