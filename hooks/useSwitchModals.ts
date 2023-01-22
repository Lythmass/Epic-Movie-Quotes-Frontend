import { useEffect, useState } from 'react';

export default function useSwitchModals() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [resetSentModal, setResetSentModal] = useState(false);
  const [passwordResetModal, setPasswordResetModal] = useState(false);
  const [successResetModal, setSuccessResetModal] = useState(false);

  useEffect(() => {
    if (hasRegistered) {
      setShowRegistrationModal(false);
    }
  }, [hasRegistered, setShowRegistrationModal]);

  useEffect(() => {
    if (showLoginModal || resetSentModal || successResetModal) {
      setShowRegistrationModal(false);
      setShowForgotPasswordModal(false);
      setPasswordResetModal(false);
    }
  }, [showLoginModal, resetSentModal, successResetModal]);

  useEffect(() => {
    if (showRegistrationModal) {
      setShowLoginModal(false);
    }
  }, [showRegistrationModal]);

  useEffect(() => {
    if (showForgotPasswordModal) {
      setShowLoginModal(false);
    }
  }, [showForgotPasswordModal]);

  return {
    showLoginModal,
    showRegistrationModal,
    hasRegistered,
    showForgotPasswordModal,
    resetSentModal,
    passwordResetModal,
    successResetModal,
    setShowLoginModal,
    setShowRegistrationModal,
    setHasRegistered,
    setShowForgotPasswordModal,
    setResetSentModal,
    setPasswordResetModal,
    setSuccessResetModal,
  };
}
