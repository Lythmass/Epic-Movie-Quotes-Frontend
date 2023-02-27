export type ModalLayoutType = {
  title: string;
  message: string;
  children: JSX.Element;
  modal: (value: boolean) => void;
};
