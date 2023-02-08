import {
  MobileInputsBlock,
  DesktopInputsBlock,
  MobileEmailButton,
  SaveOrCancel,
} from 'components';
import { EmailProfileType } from './EmailProfileType';

export const EmailProfile: React.FC<EmailProfileType> = (props) => {
  return (
    <>
      {props.screenWidth <= 1024 && (
        <MobileInputsBlock
          setEnableProfileModalEdit={props.setEnableProfileModalEdit}
          enableProfileModalEdit={props.enableProfileModalEdit}
        />
      )}
      {props.screenWidth > 1024 && (
        <DesktopInputsBlock
          clear={props.clear}
          clearInputs={props.setClear}
          setHasChanged={props.setHasChanged}
        />
      )}
      {props.screenWidth <= 1024 && (
        <MobileEmailButton
          setShowEmailsModal={props.setShowEmailsModal}
          showEmailsModal={props.showEmailsModal}
        />
      )}
      {props.screenWidth <= 1024 && props.hasChanged && (
        <SaveOrCancel
          clearInputs={props.setClear}
          setHasChanged={props.setHasChanged}
          saveProfilePicture={props.saveProfilePicture}
          setSaveProfilePicture={props.setSaveProfilePicture}
        />
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
    </>
  );
};

export default EmailProfile;
