/* eslint-disable @next/next/no-img-element */
import { InputsType } from 'types';
import { useInputsEffects } from 'hooks';

export const InputLayout: React.FC<InputsType> = (props) => {
  const { validationRule, registerName, methods, t, isCorrect, type, setType } =
    useInputsEffects(props);
  return (
    <div className='flex flex-col w-full relative'>
      <label className='text-white' htmlFor={props.label}>
        {props.label}
        <span className='text-button-red'> {!props.isOptional && '*'}</span>
      </label>
      <input
        {...methods.register(registerName, validationRule)}
        autoComplete='off'
        className={`
         ${
           isCorrect === 'true' &&
           'bg-input-correct outline outline-2 outline-outline-green '
         }
          ${
            isCorrect === 'false' &&
            'bg-input-error outline outline-2 outline-button-red'
          }
          ${
            isCorrect === '' && 'outline-none'
          } bg-[right_1rem_center] bg-no-repeat bg-[length:1.5rem_1.5rem] py-2 px-3 focus:shadow-input-focus rounded-[0.25rem] bg-[#CED4DA] placeholder-[#6C757D]`}
        type={type}
        placeholder={props.placeholder}
      />
      {(props.label == 'Password' || props.label == 'Confirm password') &&
        methods.getValues(registerName)?.length > 0 && (
          <img
            className='w-6 absolute bottom-[1.5rem] right-12'
            src='/assets/images/closed-eye.png'
            alt='show'
            onClick={() =>
              setType((oldValue) =>
                oldValue == 'password' ? 'text' : 'password'
              )
            }
          />
        )}
      <p className='text-button-red h-4 pt-1'>
        {t(methods.formState.errors[registerName]?.message)}
      </p>
    </div>
  );
};

export default InputLayout;
