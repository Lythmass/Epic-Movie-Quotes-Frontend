import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

export default function useConditionalModalsConfig(
  response: string,
  setPasswordResetModal: (value: boolean) => void
) {
  const { t } = useTranslation('common');
  useEffect(() => {
    if (response === 'Reset password') {
      setPasswordResetModal(true);
    }
  }, [response]);

  return { t };
}
