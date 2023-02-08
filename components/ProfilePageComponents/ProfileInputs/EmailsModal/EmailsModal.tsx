/* eslint-disable @next/next/no-img-element */
import { SecondaryEmailsMobile } from 'components';
import { useDispatch } from 'react-redux';
import { setShowNewEmailModalMobile } from 'slices/newEmailModalSlice';
import { useEmailsModalConfig } from 'hooks';

export default function EmailsModal() {
  const { user, showNewEmailModalMobileHere, t } = useEmailsModalConfig();
  const displaySecondaryEmails = user?.emails.map(
    (email: { email: string; email_verified_at: string | null }, i: number) => {
      return (
        <SecondaryEmailsMobile
          key={i}
          nameIndex={i}
          email={email.email}
          isVerified={email.email_verified_at}
        />
      );
    }
  );
  const dispatch = useDispatch();
  return (
    <div
      className={`w-full h-full absolute left-0 ${
        showNewEmailModalMobileHere && 'overflow-hidden'
      } top-[9rem] bg-global-layout-bg`}
    >
      <div className='w-full min-h-[10rem] bg-[#24222F] rounded-b-xl'>
        <div className='w-full min-h-[10rem] pt-8 pb-14 flex flex-col justify-center items-center'>
          <div className='w-[80%] flex flex-col gap-5 text-sm mb-[1.75rem] uppercase'>
            <label>{t('multiple-emails.primary')}</label>
            <input
              type='mail'
              className='w-full py-[0.5625rem] rounded-[0.3rem] px-4 disabled:bg-primary-email border border-[#198754] text-white bg-[right_1rem_center] bg-no-repeat bg-[length:0.8rem_0.8rem] bg-[url("/assets/images/primary-email-check.png")]'
              disabled
              value={user?.email}
            />
            <hr className='w-full bg-[#CED4DA80] opacity-30' />
          </div>
          {displaySecondaryEmails}
          <div className='w-full flex justify-center mt-[3.75rem]'>
            <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
              <h1 className='self-start uppercase'>
                {t('multiple-emails.add-new-email')}
              </h1>
              <div
                onClick={() => dispatch(setShowNewEmailModalMobile(true))}
                className='w-full flex items-center justify-center gap-2 cursor-pointer text-center border border-[#D9D9D9] rounded-[0.3rem] py-2'
              >
                <img className='w-4' src='/assets/images/plus.png' alt='add' />
                {t('multiple-emails.add')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
