export type ConditionalModalsType = {
  showRegistrationModal: boolean;
  showLoginModal: boolean;
  hasRegistered: boolean;
  showForgotPasswordModal: boolean;
  resetSentModal: boolean;
  passwordResetModal: boolean;
  successResetModal: boolean;
  setPasswordResetModal: (value: boolean) => void;
  setResetSentModal: (value: boolean) => void;
  setShowForgotPasswordModal: (value: boolean) => void;
  setShowRegistrationModal: (value: boolean) => void;
  setShowLoginModal: (value: boolean) => void;
  setHasRegistered: (value: boolean) => void;
  setSuccessResetModal: (value: boolean) => void;
  response: string;
};
