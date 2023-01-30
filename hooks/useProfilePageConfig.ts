import { useForm } from 'react-hook-form';
import { useWindowWidth, useFetchUserInfo } from 'hooks';
import { useState } from 'react';

export default function useProfilePageConfig() {
  const screenWidth = useWindowWidth();
  const methods = useForm();
  useFetchUserInfo();
  const [clear, setClear] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  return {
    screenWidth,
    methods,
    clear,
    setClear,
    hasChanged,
    setHasChanged,
  };
}
