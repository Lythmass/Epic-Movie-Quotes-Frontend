import { useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export default function usePasswordConfirmation(methods: any) {
  const { t } = useTranslation('common');
  const watchPassword = useWatch({
    name: 'password',
    control: methods.control,
  });
  const validatePasswordConfirmation = {
    validate: (value: string) =>
      value === watchPassword || t('validation.pass-confirm'),
  };
  return { validatePasswordConfirmation, watchPassword };
}
