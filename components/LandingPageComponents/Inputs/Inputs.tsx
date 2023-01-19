import { InputsType } from 'types';
import { useFormContext } from 'react-hook-form';
import { validation, registerParameters } from 'helpers';
import { usePasswordConfirmation } from 'hooks';
import { useTranslation } from 'next-i18next';

export default function InputLayout(props: InputsType) {
  const methods: any = useFormContext();
  const validatePasswordConfirmation = usePasswordConfirmation(methods);
  const { t } = useTranslation('common');

  const [registerName, validationRule] = registerParameters(
    t,
    props,
    validation,
    validatePasswordConfirmation
  );

  return (
    <div className='flex flex-col w-full'>
      <label className='text-white' htmlFor={props.label}>
        {props.label}
        <span className='text-button-red'> {!props.isOptional && '*'}</span>
      </label>
      <input
        {...methods.register(registerName, validationRule)}
        autoComplete='off'
        className='py-2 px-3 rounded-[0.25rem] bg-[#CED4DA] placeholder-[#6C757D]'
        type={props.type}
        placeholder={props.placeholder}
      />
      <p className='text-button-red h-4 pt-1'>
        {t(methods.formState.errors[registerName]?.message)}
      </p>
    </div>
  );
}
