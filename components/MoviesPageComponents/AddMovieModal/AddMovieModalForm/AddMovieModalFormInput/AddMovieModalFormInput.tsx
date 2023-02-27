import { AddMovieModalInputType } from '../AddMovieModalInput';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export const AddMovieModalFormInput: React.FC<AddMovieModalInputType> = (
  props
) => {
  const { t } = useTranslation('movies');
  const methods: any = useFormContext();
  return (
    <>
      <input
        {...methods.register(props.name, {
          required: t('required'),
        })}
        style={{
          backgroundImage: `${
            props.type === 'text' && `url('/assets/images/${props.language}.png`
          }')`,
          MozAppearance: 'textfield',
        }}
        placeholder={props.type === 'text' ? props.placeholder : t('budget')}
        autoComplete='off'
        type={props.type}
        className={`w-full appearance-none bg-[right_1rem_center] bg-no-repeat text-white py-3 pl-4 pr-14 rounded-[0.3rem] focus:outline-none placeholder-white placeholder-opacity-70 bg-[#11101A] border border-[#6C757D]`}
      />
      <p className='text-button-red h-3'>
        {methods.formState.errors[props.name]?.message}
      </p>
    </>
  );
};

export default AddMovieModalFormInput;
