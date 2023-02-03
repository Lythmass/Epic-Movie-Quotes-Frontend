import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';
import { useEffect, useState } from 'react';

export default function useCheckPrimaryEmail(methods: any, name: string) {
  const user = useSelector(selectValue);
  const [isVerified, setIsVerified] = useState(false);
  const [primaryChanged, setPrimaryChanged] = useState(false);
  useEffect(() => {
    const value = methods.getValues(name);
    const findEmail = user?.emails.find(
      (email: any) => email.email === value && email.email_verified_at !== null
    );
    if (findEmail !== undefined) {
      setIsVerified(true);
    } else {
      if (primaryChanged) {
        setIsVerified(true);
        setPrimaryChanged(false);
      } else {
        setIsVerified(false);
      }
    }
  }, [user, methods, name]);
  return { isVerified, setPrimaryChanged };
}
