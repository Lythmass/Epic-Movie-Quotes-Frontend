import { useRef } from 'react';

export default function useCloseModal(modal: (value: boolean) => void) {
  const modalRef = useRef<HTMLInputElement>(null);

  const closeModal = (event: any) => {
    const isOnModal = modalRef.current?.contains(event.target);
    if (!isOnModal) {
      modal(false);
    }
  };

  return { modalRef, closeModal };
}
