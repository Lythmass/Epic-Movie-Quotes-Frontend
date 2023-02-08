import { ProfileInputsForDesktop, SaveOrCancel } from 'components';
import { useTranslation } from 'next-i18next';
import { GoogleProfileType } from './GoogleProfileType';
export const GoogleProfile: React.FC<GoogleProfileType> = (props) => {
  const { t } = useTranslation('profile');
  return (
    <>
      <div className='mt-20 w-full'>
        <ProfileInputsForDesktop
          placeholder={t('enter', { name: t('username') })}
          label={t('username')}
          type='text'
          name='username'
          clear={props.clear}
          clearInputs={props.setClear}
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
            clearInputs={props.setClear}
            setHasChanged={props.setHasChanged}
          />
        </div>
      </div>
      <div className='absolute bottom-[-5rem] right-0'>
        {props.screenWidth > 1024 && props.hasChanged && (
          <SaveOrCancel
            clearInputs={props.setClear}
            setHasChanged={props.setHasChanged}
            saveProfilePicture={props.saveProfilePicture}
            setSaveProfilePicture={props.setSaveProfilePicture}
          />
        )}
      </div>
    </>
  );
};

export default GoogleProfile;
