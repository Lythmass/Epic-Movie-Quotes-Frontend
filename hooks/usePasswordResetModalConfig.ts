import { useForm } from 'react-hook-form';
import { InputsGroupData } from 'data';
import { useTranslation } from 'next-i18next';
import { usePasswordResetSubmitHandler } from 'hooks';

export default function usePasswordResetModalConfig(
  setSuccessResetModal: (value: boolean) => void
) {
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('common');

  const displayInputs = InputsGroupData.filter((input) => {
    if (input.type === 'password') {
      return input;
    }
  });
  const submit = usePasswordResetSubmitHandler(methods, setSuccessResetModal);
  return {
    methods,
    displayInputs,
    t,
    submit,
  };
}
