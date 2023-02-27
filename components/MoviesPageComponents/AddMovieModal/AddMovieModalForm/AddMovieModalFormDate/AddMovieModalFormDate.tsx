import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AddMovieModalInputType } from '../AddMovieModalInput';
import { useTranslation } from 'next-i18next';

export const AddMovieModalFormDate: React.FC<AddMovieModalInputType> = (
  props
) => {
  const methods: any = useFormContext();
  const [isDate, setIsDate] = useState('text');
  const { t } = useTranslation('movies');
  return (
    <>
      <input
        {...methods.register(props.name, {
          required: t('required'),
        })}
        onFocus={() => setIsDate('date')}
        placeholder={t(props.placeholder)}
        type={isDate}
        className={`w-full appearance-none bg-[right_1rem_center] bg-no-repeat text-white py-3 px-4 rounded-[0.3rem] focus:outline-none placeholder-white placeholder-opacity-70 bg-[#11101A] border border-[#6C757D]`}
      />
      <p className='text-button-red h-3'>
        {methods.formState.errors[props.name]?.message}
      </p>
    </>
  );
};

export default AddMovieModalFormDate;
