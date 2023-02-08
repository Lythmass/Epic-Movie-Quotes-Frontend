/* eslint-disable @next/next/no-img-element */
import { ProfileInputsType } from 'types';
import { useProfileInputsConfig, useCheckPrimaryEmail } from 'hooks';
import { ProfileConfirmPassword, EmailButtons } from 'components';
import { validation } from 'helpers';

export const ProfileInputsForDesktop: React.FC<ProfileInputsType> = (props) => {
  const {
    t,
    disabled,
    methods,
    clickHandler,
    validationName,
    disableClickHandler,
  } = useProfileInputsConfig(props);
  const { isVerified, setPrimaryChanged } = useCheckPrimaryEmail(
    methods,
    props.name
  );

  return (
    <div className='flex flex-col gap-2'>
      <label>{props.label}</label>
      <div className='flex relative gap-5 items-center w-full'>
        <div className='flex relative w-[72%] items-center flex-col justify-center'>
          <input
            {...methods.register(props.name, validation[validationName])}
            className={`${
              props.name === 'email'
                ? 'disabled:bg-primary-email border border-[#198754] text-white bg-[right_1rem_center] bg-no-repeat bg-[length:0.8rem_0.8rem] bg-[url("/assets/images/primary-email-check.png")]'
                : 'disabled:bg-white text-black'
            } ${
              props.type === 'mail' && props.name !== 'email' && !isVerified
                ? 'disabled:bg-not-verified disabled:text-white border border-[#EC9524] bg-[right_1rem_center] bg-no-repeat bg-[length:0.8rem_0.8rem] bg-[url("/assets/images/not-verified.png")]'
                : ''
            } p-2 w-full rounded-[0.25rem]`}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            disabled={disabled}
            autoComplete='off'
          />
          <p className='self-start text-button-red h-4'>
            {t(methods.formState.errors[props.name]?.message)}
          </p>
          {!disabled && (
            <img
              onClick={disableClickHandler}
              className='absolute top-[0.4rem] right-0 p-2 cursor-pointer'
              src='/assets/images/cancel.png'
              alt='cancel'
            />
          )}
          {!disabled && props.name === 'password' && <ProfileConfirmPassword />}
        </div>
        {props.type !== 'mail' && (
          <p onClick={clickHandler} className='cursor-pointer mb-3'>
            {disabled && t('edit')}
          </p>
        )}
        {props.type === 'mail' && (
          <EmailButtons
            verified={isVerified}
            name={props.name}
            value={methods.getValues(props.name)}
            setPrimaryChanged={setPrimaryChanged}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInputsForDesktop;
