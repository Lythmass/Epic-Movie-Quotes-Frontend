import { RegistrationModal, LoginModal, FeedbackModal } from 'components';
import { useTranslation } from 'react-i18next';
import { ConditionalModalsType } from 'types';

export default function ConditionalModals(props: ConditionalModalsType) {
  const { t } = useTranslation();
  return (
    <>
      {props.showRegistrationModal && (
        <RegistrationModal
          setHasRegistered={props.setHasRegistered}
          setShowLoginModal={props.setShowLoginModal}
        />
      )}
      {props.showLoginModal && (
        <LoginModal setShowRegistrationModal={props.setShowRegistrationModal} />
      )}
      {props.response === '"Successfully verified!"' && (
        <FeedbackModal
          image='correct'
          title={t('emailActivatedModal.title')}
          description={t('emailActivatedModal.description')}
          action={t('emailActivatedModal.action')}
          route='#'
        />
      )}
      {props.hasRegistered === true && (
        <FeedbackModal
          image='email-sent'
          title={t('emailSentModal.title')}
          description={t('emailSentModal.description')}
          action={t('emailSentModal.action')}
          route='https://www.gmail.com'
        />
      )}
    </>
  );
}
