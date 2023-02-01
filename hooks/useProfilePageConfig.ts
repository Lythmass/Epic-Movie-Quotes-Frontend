import { useForm } from 'react-hook-form';
import { useWindowWidth, useFetchUserInfo } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export default function useProfilePageConfig() {
  const screenWidth = useWindowWidth();
  const user = useSelector(selectValue);
  const methods: any = useForm({
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
    for (let i = 0; i < user?.emails.length; i++) {
      methods.setValue(`email-${i}`, user?.emails[i].email);
    }
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
