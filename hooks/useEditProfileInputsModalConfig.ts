import { useFormContext } from 'react-hook-form';
import { setMobileConfirmationModal } from 'slices/mobileConfirmationModalSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'next-i18next';

export default function useEditProfileInputsModalConfig(
  setEnableProfileModalEdit: (value: string) => void,
  name: string
) {
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { t } = useTranslation('profile');
  const cancelHandler = () => {
    setEnableProfileModalEdit('');
    methods.clearErrors();
    methods.setValue(name, '');
  };
  const saveHandler = () => {
    dispatch(setMobileConfirmationModal(true));
  };

  return {
    cancelHandler,
    saveHandler,
    t,
  };
}
