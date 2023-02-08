/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { EmailsModal } from 'components';
import { MobileEmailButtonType } from 'types';

export const MobileEmailButton: React.FC<MobileEmailButtonType> = (props) => {
  const { t } = useTranslation('profile');
  const emailsHandler = () => {
    props.setShowEmailsModal(true);
  };
  return (
    <div className='w-full flex justify-center'>
      {props.showEmailsModal && <EmailsModal />}
      <div
        onClick={emailsHandler}
        className='flex justify-between items-center w-[80%] cursor-pointer'
      >
        <p className='uppercase'>{t('email')}</p>
        <img src='/assets/images/front-arrow.png' alt='change email' />
      </div>
    </div>
  );
};
export default MobileEmailButton;
