/* eslint-disable @next/next/no-img-element */
import { useAddMovieModalFormFileConfig } from 'hooks';
import { AddMovieModalInputType } from '../AddMovieModalInput';

export const AddMovieModalFormFile: React.FC<AddMovieModalInputType> = (
  props
) => {
  const { methods, t, imageRef, dropHandler, windowSize, image } =
    useAddMovieModalFormFileConfig();
  return (
    <div
      onDragOver={(event) => {
        event?.preventDefault();
      }}
      onDragEnter={(event) => {
        event?.preventDefault();
      }}
      onDrop={dropHandler}
      className='flex flex-col gap-1'
    >
      <input
        {...methods.register('thumbnail', {
          required: { value: true, message: t('required') },
        })}
        className='hidden'
        ref={imageRef}
        type={props.type}
        accept='image/jpg, image/png, image/jpg'
        id={props.name}
      />
      <div className='text-white flex w-full justify-between xl:justify-start xl:gap-2 items-center border border-[#6C757D] py-5 px-4 rounded'>
        <div className='flex gap-2 items-center'>
          <img src='/assets/images/photograph.png' alt='upload' />
          <h1>
            {windowSize >= 1280 && t('dragndrop')}
            {windowSize < 1280 && t('upload-image')}
          </h1>
        </div>
        <label
          className='bg-[#9747FF66] cursor-pointer p-3 bg-upload-file-bg rounded-sm'
          htmlFor={props.name}
        >
          {t('choose-file')}
        </label>
      </div>
      <p className='text-button-red h-3'>
        {methods.formState.errors['thumbnail']?.message}
      </p>
      {image && <img src={image} alt={'thumbnail'} />}
    </div>
  );
};

export default AddMovieModalFormFile;
