import { AddMovieModalInputType } from '../AddMovieModalInput';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export const AddMovieModalFormTextarea: React.FC<AddMovieModalInputType> = (
  props
) => {
  const methods: any = useFormContext();
  const { t } = useTranslation('movies');
  return (
    <div className='flex flex-col gap-1'>
      <textarea
        {...methods.register(props.name, {
          required: t('required'),
        })}
        style={{
          backgroundImage: `url('/assets/images/${props.language}.png')`,
        }}
        placeholder={props.placeholder}
        className={`w-full h-[5.375rem] bg-[right_1rem_top_1rem] bg-no-repeat text-white py-3 pl-4 pr-14 rounded-[0.3rem] focus:outline-none placeholder-white placeholder-opacity-70 bg-inherit border border-[#6C757D]`}
      />
      <p className='text-button-red h-3'>
        {methods.formState.errors[props.name]?.message}
      </p>
    </div>
  );
};

export default AddMovieModalFormTextarea;
