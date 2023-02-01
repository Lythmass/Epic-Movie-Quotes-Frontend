/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { setShowNewEmailModal } from 'slices/newEmailModalSlice';

export default function AddEmailButton() {
  const dispatch = useDispatch();
  const { t } = useTranslation('profile');
  return (
    <div className='w-full flex justify-start items-center'>
      <div
        onClick={() => dispatch(setShowNewEmailModal(true))}
        className='border min-w-[12rem] cursor-pointer border-white py-3 px-4 rounded flex gap-2 justify-center items-center'
      >
        <img className='w-5 h-5' src='/assets/images/plus.png' alt='add' />
        <p>{t('new-email')}</p>
      </div>
    </div>
  );
}
