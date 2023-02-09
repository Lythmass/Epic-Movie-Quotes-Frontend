import {
  ProfileInputsForDesktop,
  SaveOrCancel,
  ProfileInputs,
} from 'components';

import { GoogleProfileType } from './GoogleProfileType';
import { useMobileInputsRefresh } from 'hooks';

export const GoogleProfile: React.FC<GoogleProfileType> = (props) => {
  const { t, name, email } = useMobileInputsRefresh();
  return (
    <>
      {props.screenWidth >= 1024 && (
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
      )}
      {props.screenWidth < 1024 && (
        <>
          <ProfileInputs
            type='text'
            label={t('username')}
            value={name}
            placeholder={t('enter', { name: t('name') })}
            name='username'
            setEnableProfileModalEdit={props.setEnableProfileModalEdit}
            enableProfileModalEdit={props.enableProfileModalEdit}
          />
          <ProfileInputs
            type='text'
            label={t('email')}
            value={email}
            placeholder={t('enter', { name: t('name') })}
            name='email'
            setEnableProfileModalEdit={props.setEnableProfileModalEdit}
            enableProfileModalEdit={props.enableProfileModalEdit}
          />
        </>
      )}
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
      {props.screenWidth <= 1024 && props.hasChanged && (
        <SaveOrCancel
          clearInputs={props.setClear}
          setHasChanged={props.setHasChanged}
          saveProfilePicture={props.saveProfilePicture}
          setSaveProfilePicture={props.setSaveProfilePicture}
        />
      )}
    </>
  );
};

export default GoogleProfile;
