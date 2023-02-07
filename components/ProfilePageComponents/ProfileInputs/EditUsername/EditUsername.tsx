import { validation } from 'helpers';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export default function EditUsername(props: { name: string; type: string }) {
  const methods: any = useFormContext();
  const { t } = useTranslation('profile');
  const validationName = 'name';
  return (
    <>
      <label className='self-start'>Enter new {props.name}</label>
      <input
        {...methods.register(props.name, validation[validationName])}
        name={props.name}
        type={props.type}
        autoComplete='off'
        className='w-full bg-[#CED4DA] h-12 rounded-[0.3rem] text-black px-3'
      />
      <p className='self-start text-button-red h-4'>
        {t(methods.formState.errors[props.name]?.message)}
      </p>
    </>
  );
}
