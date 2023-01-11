import { useEffect, useState } from 'react';

export default function useSwitchModals() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (showLoginModal) {
      setShowRegistrationModal(false);
    }
  }, [showLoginModal]);
  useEffect(() => {
    if (showRegistrationModal) {
      setShowLoginModal(false);
    }
  }, [showRegistrationModal]);

  return {
    showLoginModal,
    showRegistrationModal,
    setShowLoginModal,
    setShowRegistrationModal,
  };
}
