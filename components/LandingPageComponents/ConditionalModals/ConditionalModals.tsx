import {
  RegistrationModal,
  LoginModal,
  FeedbackModal,
  ForgotPasswordModal,
  PasswordResetModal,
} from 'components';
import { ConditionalModalsType } from 'types';
import useConditionalModalsConfig from './useConditionalModalsConfig';

export const ConditionalModals: React.FC<ConditionalModalsType> = (props) => {
  const { t } = useConditionalModalsConfig(
    props.response,
    props.setPasswordResetModal
  );
  return (
    <>
      {props.showRegistrationModal && (
        <RegistrationModal
          setHasRegistered={props.setHasRegistered}
          setShowLoginModal={props.setShowLoginModal}
          setShowRegistrationModal={props.setShowRegistrationModal}
        />
      )}
      {props.showLoginModal && (
        <LoginModal
          setShowForgotPasswordModal={props.setShowForgotPasswordModal}
          setShowRegistrationModal={props.setShowRegistrationModal}
          setShowLoginModal={props.setShowLoginModal}
        />
      )}
      {props.response === '"Successfully verified!"' &&
        !props.showLoginModal && (
          <FeedbackModal
            image='correct'
            title={t('emailActivatedModal.title')}
            description={t('emailActivatedModal.description')}
            action={t('emailActivatedModal.action')}
            setShowLoginModal={props.setShowLoginModal}
            route='login'
          />
        )}
      {props.passwordResetModal && (
        <PasswordResetModal
          setSuccessResetModal={props.setSuccessResetModal}
          setShowLoginModal={props.setShowLoginModal}
          setPasswordResetModal={props.setPasswordResetModal}
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
          setShowForgotPasswordModal={props.setShowForgotPasswordModal}
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
      {props.successResetModal && !props.showLoginModal && (
        <FeedbackModal
          image='correct'
          title={t('successResetModal.title')}
          description={t('successResetModal.description')}
          action={t('successResetModal.action')}
          setShowLoginModal={props.setShowLoginModal}
          route='login'
        />
      )}
    </>
  );
};

export default ConditionalModals;
