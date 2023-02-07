import {
  EditProfileInputsModal,
  ConfirmationModal,
  EditUsername,
  EditPassword,
} from 'components';

export const UsernameOrPassword: React.FC<{
  enableProfileModalEdit: string;
  setEnableProfileModalEdit: (value: string) => void;
  name: string;
  mobileConfirmationModalHere: boolean;
}> = (props) => {
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
