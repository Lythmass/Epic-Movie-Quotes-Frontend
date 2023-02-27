export type EmailProfileType = {
  screenWidth: number;
  setEnableProfileModalEdit: (value: string) => void;
  enableProfileModalEdit: string;
  clear: boolean;
  setClear: (value: boolean) => void;
  setHasChanged: (value: boolean) => void;
  setShowEmailsModal: (value: boolean) => void;
  showEmailsModal: boolean;
  hasChanged: boolean;
  saveProfilePicture: string;
  setSaveProfilePicture: (value: string) => void;
};
