export type ProfileInputsType = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  clear: boolean;
  clearInputs: (value: boolean) => void;
  setHasChanged: (value: boolean) => void;
};
