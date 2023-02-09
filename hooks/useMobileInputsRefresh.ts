import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';
import { useEffect, useState } from 'react';

export default function useMobileInputsRefresh() {
  const { t } = useTranslation('profile');
  const [name, setName] = useState('');
  const user = useSelector(selectValue);
  useEffect(() => {
    setName(user?.name);
  }, [user]);

  return {
    t,
    name,
    email: user?.email,
  };
}
