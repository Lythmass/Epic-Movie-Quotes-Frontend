/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

export default function ToastDesign(props: {
  namespace: string;
  message: string;
}) {
  const { t } = useTranslation(props.namespace);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div className='flex gap-2'>
        <img src='/assets/images/toast-icon.png' alt='icon' />
        <h1>{t('simple-alert')}</h1>
      </div>
      <h1 style={{ color: 'black', fontSize: '1rem' }}>{t(props.message)}</h1>
    </div>
  );
}
