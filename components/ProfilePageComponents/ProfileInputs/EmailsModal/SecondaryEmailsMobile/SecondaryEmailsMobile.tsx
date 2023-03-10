/* eslint-disable @next/next/no-img-element */
import { useSecondaryEmailsMobileConfig } from 'hooks';
import { SecondaryEmailsMobileType } from 'types';

export const SecondaryEmailsMobile: React.FC<SecondaryEmailsMobileType> = (
  props
) => {
  const { t, deleteHandler, primaryChangerHandler } =
    useSecondaryEmailsMobileConfig(props);
  return (
    <div className='w-[80%] flex flex-col gap-6 mt-8'>
      <h1>{props.email}</h1>
      <div className='w-full flex justify-between items-center'>
        {props.isVerified !== null && (
          <div
            onClick={() => primaryChangerHandler(props.email)}
            className='py-2 px-4 rounded-[0.3rem] border border-[#D9D9D9] cursor-pointer'
          >
            {t('multiple-emails.make-primary')}
          </div>
        )}
        {props.isVerified === null && (
          <div className='text-[#EC9524] flex items-center gap-2'>
            <img src='/assets/images/not-verified.png' alt='not verified' />
            <i>{t('multiple-emails.not-verified')}</i>
          </div>
        )}

        <div onClick={deleteHandler} className='cursor-pointer'>
          {t('multiple-emails.remove')}
        </div>
      </div>
      <hr className='w-full bg-[#CED4DA80] opacity-30' />
    </div>
  );
};

export default SecondaryEmailsMobile;
