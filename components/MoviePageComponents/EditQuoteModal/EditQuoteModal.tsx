/* eslint-disable @next/next/no-img-element */
import {
  AddMovieModalFormTextarea,
  AddMovieModalProfile,
  EditQuoteModalHeader,
} from 'components';
import { FormProvider } from 'react-hook-form';
import { useEditQuoteModalConfig } from 'hooks';

export const EditQuoteModal = () => {
  const { submit, t, methods, quote, imageRef } = useEditQuoteModalConfig();

  return (
    <div className='h-screen flex justify-center w-full absolute bg-frozen-bg z-[100]'>
      <div className='w-full lg:mt-[3rem] lg:w-[50%] lg:h-[85%] overflow-auto h-screen bg-[#11101A]'>
        <EditQuoteModalHeader quote={quote} />
        <hr className='w-full bg-[#EFEFEF33] opacity-20' />
        <div className='p-8'>
          <AddMovieModalProfile />
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(submit)}
              className='pt-8 flex flex-col gap-3'
            >
              <AddMovieModalFormTextarea
                name='quote-en'
                type='text-area'
                placeholder='Enter quote'
                language='eng'
              />
              <AddMovieModalFormTextarea
                name='quote-ka'
                type='text-area'
                placeholder='შეიყვანეთ ციტატა'
                language='geo'
              />
              <div className='relative flex justify-center items-center w-full h-[18.875rem]'>
                <img
                  className='rounded-[0.625rem] mt-2 absolute left-0 top-0 h-full w-full object-cover'
                  src={quote?.thumbnail}
                  ref={imageRef}
                  alt='thumbnail'
                />
                <input
                  {...methods.register('thumbnail', {
                    required: t('required'),
                  })}
                  accept='image/jpg, image/png, image/jpg'
                  type='file'
                  id='thumbnail'
                  className='hidden'
                />
                <label
                  htmlFor='thumbnail'
                  className='z-[100] cursor-pointer flex flex-col justify-center items-center relative bg-change-thumbnail-bg w-[8.5rem] h-[5.25rem] rounded-[0.3rem]'
                >
                  <img
                    src='/assets/images/photograph.png'
                    alt='change thumbnail'
                  />
                  <h1 className='text-white'>{t('change-photo')}</h1>
                </label>
              </div>
              <p className='text-button-red h-3'>
                {methods.formState.errors['thumbnail']?.message}
              </p>
              <button
                type='submit'
                className='w-full mt-4 bg-button-red text-white text-center text-xl py-2 rounded-[0.3rem]'
              >
                {t('save-changes')}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default EditQuoteModal;
