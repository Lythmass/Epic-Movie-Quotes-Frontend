import { useState } from 'react';
import { UseChangeLanguageType } from 'types';

export default function useChangeLanguage(): UseChangeLanguageType {
  const [currentLanguage, setCurrentLanguage] = useState('Eng');
  const [optionsModal, setOptionsModal] = useState(false);

  function clickHandler() {
    setOptionsModal((oldValue) => !oldValue);
  }

  return [currentLanguage, setCurrentLanguage, optionsModal, clickHandler];
}
