import { ProfileInputs } from 'components';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export default function MobileInputsBlock(props: {
  enableProfileModalEdit: string;
  setEnableProfileModalEdit: (value: string) => void;
}) {
  const { t } = useTranslation('profile');
  const user = useSelector(selectValue);

  return (
    <>
      <ProfileInputs
        type='text'
        label={t('username')}
        value={user?.name}
        placeholder={t('enter', { name: t('name') })}
        name='username'
        setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        enableProfileModalEdit={props.enableProfileModalEdit}
      />
      <ProfileInputs
        type='password'
        label={t('password')}
        value=''
        placeholder={t('enter', { name: t('password') })}
        name='password'
        setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        enableProfileModalEdit={props.enableProfileModalEdit}
      />
    </>
  );
}
