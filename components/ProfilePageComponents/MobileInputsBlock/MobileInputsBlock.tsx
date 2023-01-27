import { ProfileInputs } from 'components';
import { useTranslation } from 'next-i18next';
export default function MobileInputsBlock() {
  const { t } = useTranslation('profile');
  return (
    <>
      <ProfileInputs type='text' label={t('username')} data='gamarjoba' />
      <ProfileInputs type='password' label={t('password')} data='gamarjoba' />
    </>
  );
}
