import { ProfileInputsForDesktop, AddEmailButton } from 'components';
import { useDesktopInputsBlockConfig } from 'hooks';
import { DesktopInputsBlockType } from 'types';

const DesktopInputsBlock: React.FC<DesktopInputsBlockType> = (props) => {
  const { screenWidth, t, user } = useDesktopInputsBlockConfig();
  const displayOtherEmails = user?.emails.map(
    (email: { email_verified_at: string | null }, i: number) => {
      return (
        <ProfileInputsForDesktop
          key={i}
          placeholder={t('enter', { name: t('email') })}
          label={t('email')}
          type='mail'
          name={`email-${i}`}
          clear={props.clear}
          clearInputs={props.clearInputs}
          setHasChanged={props.setHasChanged}
        />
      );
    }
  );
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
        {displayOtherEmails}
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
};

export default DesktopInputsBlock;
