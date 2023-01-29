/* eslint-disable @next/next/no-img-element */
import { ProfileInputsType } from 'types';
import { useProfileInputsConfig } from 'hooks';

export default function ProfileInputsForDesktop(props: ProfileInputsType) {
  const { t, disabled, setDefaultValue, methods, clickHandler } =
    useProfileInputsConfig(props);

  return (
    <div className='flex flex-col gap-2'>
      <label>{props.label}</label>
      <div className='flex relative gap-5 items-center w-full'>
        <div className='flex relative w-[72%] items-center'>
          <input
            {...methods.register(props.name)}
            className='p-2 text-black w-full rounded-[0.25rem] disabled:bg-white'
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            defaultValue={props.value}
            disabled={disabled}
            ref={setDefaultValue}
          />
          {!disabled && (
            <img
              onClick={clickHandler}
              className='absolute right-0 p-2 cursor-pointer'
              src='/assets/images/cancel.png'
              alt='cancel'
            />
          )}
        </div>
        <p onClick={clickHandler} className='cursor-pointer'>
          {disabled && t('edit')}
        </p>
      </div>
    </div>
  );
}
