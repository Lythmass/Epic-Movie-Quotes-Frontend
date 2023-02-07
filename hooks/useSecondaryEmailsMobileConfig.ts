import { useRemoveEmail, useChangePrimaryEmail } from 'hooks';
import { useTranslation } from 'next-i18next';
import { SecondaryEmailsMobileType } from 'types';

export default function useSecondaryEmailsMobileConfig(
  props: SecondaryEmailsMobileType
) {
  const { t } = useTranslation('profile');
  const deleteHandler = useRemoveEmail(props.email);
  const primaryChangerHandler = useChangePrimaryEmail(
    props.isVerified !== null ? true : false,
    `email-${props.nameIndex}`
  );

  return {
    t,
    deleteHandler,
    primaryChangerHandler,
  };
}
