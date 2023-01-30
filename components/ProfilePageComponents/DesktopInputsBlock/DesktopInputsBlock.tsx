import { ProfileInputsForDesktop, AddEmailButton } from 'components';
import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';

export default function DesktopInputsBlock(props: {
  clear: boolean;
  clearInputs: (value: boolean) => void;
  setHasChanged: (value: boolean) => void;
}) {
  const screenWidth = useWindowWidth();
  const { t } = useTranslation('profile');
  return (
    <div className='mt-20 w-full'>
      <ProfileInputsForDesktop
        placeholder={t('enter', { name: t('username') })}
        label={t('username')}
        type='text'
        name='username'
        clear={props.clear}
        clearInputs={props.clearInputs}
        setHasChanged={props.setHasChanged}
      />

      <hr className='border-[#CED4DA80] opacity-50 w-[72%] my-5' />
      <div className='flex flex-col gap-8'>
        <ProfileInputsForDesktop
          placeholder={t('enter', { name: t('email') })}
          label={t('email')}
          type='mail'
          name='email'
          clear={props.clear}
          clearInputs={props.clearInputs}
          setHasChanged={props.setHasChanged}
        />
        {screenWidth > 1024 && <AddEmailButton />}
      </div>

      <hr className='border-[#CED4DA80] opacity-50 w-[72%] my-8' />
      <ProfileInputsForDesktop
        placeholder={t('enter', { name: t('password') })}
        label={t('password')}
        type='password'
        name='password'
        clear={props.clear}
        clearInputs={props.clearInputs}
        setHasChanged={props.setHasChanged}
      />
    </div>
  );
}
