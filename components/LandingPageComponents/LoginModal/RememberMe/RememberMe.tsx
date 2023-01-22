import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

export default function RememberMe(props: {
  setShowForgotPasswordModal: (value: boolean) => void;
}) {
  const methods = useFormContext();
  const { t } = useTranslation('common');
  return (
    <div className='flex justify-between w-full'>
      <div className='flex gap-2 text-white items-center'>
        <input
          {...methods.register('remember')}
          className='focus:outline-none rounded-[0.25rem] w-4 h-4 bg-white appearance-none bg-center bg-no-repeat bg-[length:0.625rem_0.625rem] checked:bg-[url("/assets/images/checkbox.png")]'
          type='checkbox'
          id='remember'
          name='remember'
        />
        <label htmlFor='remember'>{t('loginModal.remember-me')}</label>
      </div>
      <span
        onClick={() => props.setShowForgotPasswordModal(true)}
        className='text-[#0D6EFD] underline cursor-pointer'
      >
        {t('loginModal.forgot-password')}
      </span>
    </div>
  );
}
