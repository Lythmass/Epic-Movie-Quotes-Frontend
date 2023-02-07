import { useRemoveEmail, useChangePrimaryEmail } from 'hooks';
import { useTranslation } from 'next-i18next';

export default function useEmailButtonsConfig(
  value: string,
  verified: boolean,
  name: string,
  setPrimaryChanged: (value: boolean) => void
) {
  const deleteHandler = useRemoveEmail(value);
  const primaryChangerHandler = useChangePrimaryEmail(
    verified,
    name,
    setPrimaryChanged
  );
  const { t } = useTranslation('profile');

  return {
    deleteHandler,
    t,
    primaryChangerHandler,
  };
}
