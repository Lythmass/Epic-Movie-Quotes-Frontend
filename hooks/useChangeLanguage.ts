import { useEffect, useState } from 'react';
import { UseChangeLanguageType } from 'types';
import { useRouter } from 'next/router';

export default function useChangeLanguage(): UseChangeLanguageType {
  const [currentLanguage, setCurrentLanguage] = useState('Eng');
  const [optionsModal, setOptionsModal] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setCurrentLanguage(router.locale === 'en' ? 'Eng' : 'Geo');
  }, []);

  function clickHandler() {
    setOptionsModal((oldValue) => !oldValue);
  }
  return [currentLanguage, setCurrentLanguage, optionsModal, clickHandler];
}
