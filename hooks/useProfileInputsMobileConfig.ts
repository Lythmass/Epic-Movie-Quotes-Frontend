import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { mobileConfirmationModal } from 'slices/mobileConfirmationModalSlice';
import { setMobileConfirmationModal } from 'slices/mobileConfirmationModalSlice';
import { useDispatch } from 'react-redux';

export default function useProfileInputsMobileConfig(
  name: string,
  setEnableProfileModalEdit: (value: string) => void
) {
  const { t } = useTranslation('profile');
  const editHandler = () => {
    if (name === 'username') {
      setEnableProfileModalEdit('username');
    }
    if (name === 'password') {
      setEnableProfileModalEdit('password');
    }
  };
  const dispatch = useDispatch();
  const mobileConfirmationModalHere = useSelector(mobileConfirmationModal);
  const methods: any = useFormContext();

  useEffect(() => {
    if (
      methods.formState.errors[name] !== undefined &&
      mobileConfirmationModalHere
    ) {
      dispatch(setMobileConfirmationModal(false));
    }
  }, [methods.formState.errors, mobileConfirmationModalHere, name]);

  return {
    t,
    editHandler,
    mobileConfirmationModalHere,
  };
}
