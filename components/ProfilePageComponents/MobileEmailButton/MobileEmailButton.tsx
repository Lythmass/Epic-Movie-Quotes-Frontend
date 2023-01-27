/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
export default function MobileEmailButton() {
  const { t } = useTranslation('profile');
  return (
    <div className='flex justify-between items-center w-[80%]'>
      <p className='uppercase'>{t('email')}</p>
      <img src='/assets/images/front-arrow.png' alt='change email' />
    </div>
  );
}
