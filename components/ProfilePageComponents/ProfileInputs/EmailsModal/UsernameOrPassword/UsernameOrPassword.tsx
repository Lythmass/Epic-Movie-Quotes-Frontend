import {
  EditProfileInputsModal,
  ConfirmationModal,
  EditUsername,
  EditPassword,
} from 'components';
import { UsernameOrPasswordType } from 'types';

export const UsernameOrPassword: React.FC<UsernameOrPasswordType> = (props) => {
  return (
    <>
      {props.enableProfileModalEdit === 'username' && (
        <EditProfileInputsModal
          name={props.name}
          setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        >
          <>
            {props.mobileConfirmationModalHere && <ConfirmationModal />}
            <EditUsername name='username' type='text' />
          </>
        </EditProfileInputsModal>
      )}
      {props.enableProfileModalEdit === 'password' && (
        <EditProfileInputsModal
          name={props.name}
          setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        >
          <>
            {props.mobileConfirmationModalHere && <ConfirmationModal />}
            <EditPassword name='password' type='password' />
          </>
        </EditProfileInputsModal>
      )}
    </>
  );
};

export default UsernameOrPassword;
