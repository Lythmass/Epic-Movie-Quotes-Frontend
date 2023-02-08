import { ProfileInputsMobileType } from 'types';
import { UsernameOrPassword } from 'components';
import { useProfileInputsMobileConfig } from 'hooks';

export const ProfileInputs: React.FC<ProfileInputsMobileType> = (props) => {
  const { t, editHandler, mobileConfirmationModalHere } =
    useProfileInputsMobileConfig(props.name, props.setEnableProfileModalEdit);
  return (
    <>
      <div className='flex flex-col w-[80%]'>
        <label className='mb-1'>{props.label}</label>
        <div className='flex justify-between'>
          <input
            className='bg-[rgba(0,0,0,0)] w-full focus:outline-none text-lg'
            type={props.type}
            disabled
            placeholder={props.placeholder}
            name={props.name}
            defaultValue={props.value}
          />
          <p onClick={editHandler} className='cursor-pointer'>
            {t('edit')}
          </p>
        </div>
        <hr className='mt-1 border-[#CED4DA80]' />
      </div>
      <UsernameOrPassword
        enableProfileModalEdit={props.enableProfileModalEdit}
        setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        name={props.name}
        mobileConfirmationModalHere={mobileConfirmationModalHere}
      />
    </>
  );
};

export default ProfileInputs;
