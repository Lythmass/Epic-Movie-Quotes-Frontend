import { useEffect, useState } from 'react';

export default function useSwitchModals() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);
  useEffect(() => {
    if (hasRegistered) {
      setShowRegistrationModal(false);
    }
  }, [hasRegistered, setShowRegistrationModal]);

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
    hasRegistered,
    setShowLoginModal,
    setShowRegistrationModal,
    setHasRegistered,
  };
}
