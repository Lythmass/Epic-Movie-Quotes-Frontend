import {
  RegistrationModal,
  LoginModal,
  FeedbackModal,
  ForgotPasswordModal,
  PasswordResetModal,
} from 'components';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { ConditionalModalsType } from 'types';

export default function ConditionalModals(props: ConditionalModalsType) {
  const { t } = useTranslation('common');
  useEffect(() => {
    if (props.response === 'Reset password') {
      props.setPasswordResetModal(true);
    }
  }, [props.response]);
  return (
    <>
      {props.showRegistrationModal && (
        <RegistrationModal
          setHasRegistered={props.setHasRegistered}
          setShowLoginModal={props.setShowLoginModal}
        />
      )}
      {props.showLoginModal && (
        <LoginModal
          setShowForgotPasswordModal={props.setShowForgotPasswordModal}
          setShowRegistrationModal={props.setShowRegistrationModal}
        />
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
      {props.passwordResetModal && (
        <PasswordResetModal
          setSuccessResetModal={props.setSuccessResetModal}
          setShowLoginModal={props.setShowLoginModal}
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
      {props.showForgotPasswordModal && (
        <ForgotPasswordModal
          setResetSentModal={props.setResetSentModal}
          setShowLoginModal={props.setShowLoginModal}
        />
      )}
      {props.resetSentModal && (
        <FeedbackModal
          image='email-sent'
          title={t('passwordResetSentModal.title')}
          description={t('passwordResetSentModal.description')}
          action={t('passwordResetSentModal.action')}
          route='https://gmail.com'
        />
      )}
      {props.successResetModal && (
        <FeedbackModal
          image='correct'
          title={t('successResetModal.title')}
          description={t('successResetModal.description')}
          action={t('successResetModal.action')}
          route='#'
        />
      )}
    </>
  );
}