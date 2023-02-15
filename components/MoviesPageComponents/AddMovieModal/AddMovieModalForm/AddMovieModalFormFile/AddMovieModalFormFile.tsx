/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';
import { AddMovieModalInputType } from '../AddMovieModalInput';

export const AddMovieModalFormFile: React.FC<AddMovieModalInputType> = (
  props
) => {
  const methods: any = useFormContext();
  const { t } = useTranslation('movies');
  return (
    <div className='flex flex-col gap-1'>
      <input
        {...methods.register(props.name, {
          required: t('required'),
        })}
        className='hidden'
        type={props.type}
        accept='image/jpg, image/png, image/jpg'
        id={props.name}
      />
      <div className='text-white flex w-full justify-between items-center border border-[#6C757D] py-5 px-4 rounded'>
        <div className='flex gap-2 items-center'>
          <img src='/assets/images/photograph.png' alt='upload' />
          <h1>{t('upload-image')}</h1>
        </div>
        <label
          className='bg-[#9747FF66] cursor-pointer p-3 bg-upload-file-bg rounded-sm'
          htmlFor={props.name}
        >
          {t('choose-file')}
        </label>
      </div>
      <p className='text-button-red h-3'>
        {methods.formState.errors[props.name]?.message}
      </p>
    </div>
  );
};

export default AddMovieModalFormFile;
