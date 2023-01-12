import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export default function usePasswordConfirmation(methods: any) {
  const { t } = useTranslation();
  const watchPassword = useWatch({
    name: t('registrationModal.password').toLowerCase(),
    control: methods.control,
  });
  const validatePasswordConfirmation = {
    validate: (value: string) =>
      value === watchPassword || t('validation.pass-confirm'),
  };

  return validatePasswordConfirmation;
}
