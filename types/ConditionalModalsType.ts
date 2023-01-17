export type ConditionalModalsType = {
  showRegistrationModal: boolean;
  showLoginModal: boolean;
  hasRegistered: boolean;
  setShowRegistrationModal: (value: boolean) => void;
  setShowLoginModal: (value: boolean) => void;
  setHasRegistered: (value: boolean) => void;
  response: string;
};
