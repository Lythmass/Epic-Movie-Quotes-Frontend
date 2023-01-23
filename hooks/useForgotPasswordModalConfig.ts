import { useForm } from 'react-hook-form';
import { InputsGroupData } from 'data';
import { useTranslation } from 'next-i18next';
import { useForgotPasswordSubmitHandler } from 'hooks';

export default function useForgotPasswordModalConfig(
  setResetSentModal: (value: boolean) => void
) {
  const methods = useForm({ mode: 'all' });
  const email = InputsGroupData[1];
  const { t } = useTranslation('common');

  const submit = useForgotPasswordSubmitHandler(methods, setResetSentModal);

  return {
    methods,
    email,
    t,
    submit,
  };
}
