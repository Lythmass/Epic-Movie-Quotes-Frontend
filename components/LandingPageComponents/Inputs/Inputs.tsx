import { InputsType } from 'types';
import { useFormContext } from 'react-hook-form';
import { validation } from 'helpers';
import { usePasswordConfirmation } from 'hooks';

export default function InputLayout(props: InputsType) {
  const methods: any = useFormContext();
  const validatePasswordConfirmation = usePasswordConfirmation(methods);

  return (
    <div className='flex flex-col w-full'>
      <label className='text-white' htmlFor={props.label}>
        {props.label}
        <span className='text-button-red'> {!props.isOptional && '*'}</span>
      </label>
      <input
        {...methods.register(
          props.label.toLocaleLowerCase(),
          props.label.toLocaleLowerCase() === 'confirm password'
            ? validatePasswordConfirmation
            : validation[props.label.toLowerCase()]
        )}
        autoComplete='off'
        className='py-2 px-3 rounded-[0.25rem] bg-[#CED4DA] placeholder-[#6C757D]'
        type={props.type}
        placeholder={props.placeholder}
      />
      <p className='text-button-red h-4 pt-1'>
        {methods.formState.errors[props.label.toLocaleLowerCase()]?.message}
      </p>
    </div>
  );
}
