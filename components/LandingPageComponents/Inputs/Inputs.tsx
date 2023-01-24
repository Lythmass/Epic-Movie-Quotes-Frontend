import { InputsType } from 'types';
import { useInputsEffects } from 'hooks';

export default function InputLayout(props: InputsType) {
  const { validationRule, registerName, methods, t, inputOutline, isCorrect } =
    useInputsEffects(props);
  return (
    <div className='flex flex-col w-full'>
      <label className='text-white' htmlFor={props.label}>
        {props.label}
        <span className='text-button-red'> {!props.isOptional && '*'}</span>
      </label>
      <input
        {...methods.register(registerName, validationRule)}
        autoComplete='off'
        className={`${inputOutline}
         ${isCorrect === 'true' && 'bg-input-correct '}
          ${isCorrect === 'false' && 'bg-input-error '}
          ${
            isCorrect === '' && 'outline-none'
          } bg-[right_1rem_center] bg-no-repeat bg-[length:1.5rem_1.5rem] py-2 px-3 focus:shadow-input-focus rounded-[0.25rem] bg-[#CED4DA] placeholder-[#6C757D]`}
        type={props.type}
        placeholder={props.placeholder}
      />
      <p className='text-button-red h-4 pt-1'>
        {t(methods.formState.errors[registerName]?.message)}
      </p>
    </div>
  );
}
