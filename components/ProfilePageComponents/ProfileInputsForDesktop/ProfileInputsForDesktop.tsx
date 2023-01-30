/* eslint-disable @next/next/no-img-element */
import { ProfileInputsType } from 'types';
import { useProfileInputsConfig } from 'hooks';
import { ProfileConfirmPassword } from 'components';

export default function ProfileInputsForDesktop(props: ProfileInputsType) {
  const { t, disabled, methods, clickHandler } = useProfileInputsConfig(props);
  return (
    <div className='flex flex-col gap-2'>
      <label>{props.label}</label>
      <div className='flex relative gap-5 items-center w-full'>
        <div className='flex relative w-[72%] items-center flex-col justify-center'>
          <input
            {...methods.register(props.name)}
            className='p-2 text-black w-full rounded-[0.25rem] disabled:bg-white'
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            disabled={disabled}
          />
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
        <p onClick={clickHandler} className='cursor-pointer'>
          {disabled && t('edit')}
        </p>
      </div>
    </div>
  );
}
