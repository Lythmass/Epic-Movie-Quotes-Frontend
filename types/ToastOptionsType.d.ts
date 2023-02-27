import { ToastPosition, Theme } from 'react-toastify';

export type ToastOptionsType = {
  position: ToastPosition | undefined;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: true;
  progress: undefined;
  theme: Theme | undefined;
};
