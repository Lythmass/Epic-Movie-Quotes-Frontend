import { RefObject } from 'react';

export type QuoteDropdownType = {
  setShowDropdown: (value: boolean) => void;
  showDropdown: boolean;
  dotsRef: RefObject<HTMLImageElement>;
};
