import { useCloseModal } from 'hooks';
import { useEffect } from 'react';

export default function useQuoteDropdownConfig(
  setShowDropdown: (value: boolean) => void,
  showDropdown: boolean,
  dotsRef: any
) {
  const { modalRef, closeModal } = useCloseModal(setShowDropdown);
  useEffect(() => {
    if (showDropdown) {
      document.body.addEventListener('click', (event) => {
        if (!dotsRef.current?.contains(event.target)) {
          closeModal(setShowDropdown);
        }
      });
    } else {
      document.body.removeEventListener('click', closeModal);
    }
  }, [showDropdown, closeModal]);

  return modalRef;
}
