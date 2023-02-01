/* eslint-disable @next/next/no-img-element */
import { ProfileInputsType } from 'types';
import { useProfileInputsConfig } from 'hooks';
import { ProfileConfirmPassword, EmailButtons } from 'components';
import { validation } from 'helpers';

export default function ProfileInputsForDesktop(props: ProfileInputsType) {
  const { t, disabled, methods, clickHandler, validationName } =
    useProfileInputsConfig(props);
  return (
    <div className='flex flex-col gap-2'>
      <label>{props.label}</label>
      <div className='flex relative gap-5 items-center w-full'>
        <div className='flex relative w-[72%] items-center flex-col justify-center'>
          <input
            {...methods.register(props.name, validation[validationName])}
            className='p-2 text-black w-full rounded-[0.25rem] disabled:bg-white'
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
              onClick={clickHandler}
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
          <EmailButtons value={methods.getValues(props.name)} />
        )}
      </div>
    </div>
  );
}
