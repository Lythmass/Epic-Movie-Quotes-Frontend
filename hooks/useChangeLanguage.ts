import { useEffect, useState } from 'react';
import { UseChangeLanguageType } from 'types';
import { useTranslation } from 'react-i18next';

export default function useChangeLanguage(): UseChangeLanguageType {
  const [currentLanguage, setCurrentLanguage] = useState('Eng');
  const [optionsModal, setOptionsModal] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage === 'Eng' ? 'en' : 'ka');
  }, [i18n, currentLanguage]);

  function clickHandler() {
    setOptionsModal((oldValue) => !oldValue);
  }

  return [currentLanguage, setCurrentLanguage, optionsModal, clickHandler];
}
