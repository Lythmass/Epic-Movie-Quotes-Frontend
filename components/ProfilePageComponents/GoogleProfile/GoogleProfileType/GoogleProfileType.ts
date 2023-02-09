export type GoogleProfileType = {
  clear: boolean;
  setClear: (value: boolean) => void;
  setHasChanged: (value: boolean) => void;
  screenWidth: number;
  hasChanged: boolean;
  saveProfilePicture: string;
  setSaveProfilePicture: (value: string) => void;
  setEnableProfileModalEdit: (value: string) => void;
  enableProfileModalEdit: string;
};
