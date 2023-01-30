import { useForm } from 'react-hook-form';
import { useWindowWidth, useFetchUserInfo } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export default function useProfilePageConfig() {
  const screenWidth = useWindowWidth();
  const user = useSelector(selectValue);
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      password: null,
    },
  });
  useFetchUserInfo();
  const [clear, setClear] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    methods.setValue('username', user?.name);
    methods.setValue('email', user?.email);
  }, [user, methods]);

  return {
    screenWidth,
    methods,
    clear,
    setClear,
    hasChanged,
    setHasChanged,
  };
}
