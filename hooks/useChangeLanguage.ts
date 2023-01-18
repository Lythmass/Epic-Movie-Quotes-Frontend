import { useEffect, useState } from 'react';
import { UseChangeLanguageType } from 'types';
import { useTranslation } from 'react-i18next';
import { getCookie } from 'cookies-next';
export default function useChangeLanguage(): UseChangeLanguageType {
  const [currentLanguage, setCurrentLanguage] = useState('Eng');
  const [optionsModal, setOptionsModal] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage === 'Eng' ? 'en' : 'ka');
  }, [i18n, currentLanguage]);
  useEffect(() => {
    setCurrentLanguage(getCookie('locale') === 'ka' ? 'Geo' : 'Eng');
  }, []);

  function clickHandler() {
    setOptionsModal((oldValue) => !oldValue);
  }
  return [currentLanguage, setCurrentLanguage, optionsModal, clickHandler];
}
