/* eslint-disable @next/next/no-img-element */
import {
  AddMovieModalProfile,
  ShowMovieExample,
  AddMovieModalFormFile,
  AddMovieModalFormTextarea,
} from 'components';
import { setAddQuoteModal } from 'slices/quotesSlice';
import { FormProvider } from 'react-hook-form';
import { useAddQuoteModalConfig } from 'hooks';

export const AddQuoteModal = () => {
  const { dispatch, methods, submit, t, movie, modalRef, closeModal } =
    useAddQuoteModalConfig();

  return (
    <div
      onClick={closeModal}
      className='absolute z-[100] flex xl:pt-[4rem] justify-center bg-frozen-bg w-full h-full'
    >
      <div
        ref={modalRef}
        className='absolute lg:w-[70%] rounded-xl xl:w-[50%] lg:h-[50rem] overflow-x-hidden px-11 bg-modal-bg w-full h-screen'
      >
        <header className='flex justify-center items-center py-8'>
          <h1 className='text-white font-medium text-xl flex justify-center w-full'>
            {t(`add-quote`)}
          </h1>
          <img
            onClick={() => dispatch(setAddQuoteModal(false))}
            className='w-[0.875rem] h-[0.875rem] cursor-pointer'
            src='/assets/images/close.png'
            alt='close'
          />
        </header>
        <hr className='w-screen translate-x-[-2.83rem] bg-[#EFEFEF33] opacity-20 mb-8' />
        <AddMovieModalProfile />
        <div className='w-full pb-10'>
          <ShowMovieExample movie={movie} />
          <FormProvider {...methods}>
            <form
              className='flex flex-col mt-8 gap-5'
              onSubmit={methods.handleSubmit(submit)}
            >
              <AddMovieModalFormTextarea
                name='quote-en'
                type='textarea'
                placeholder='Create new quote'
                language='eng'
              />
              <AddMovieModalFormTextarea
                name='quote-ka'
                type='textarea'
                placeholder='დაამატეთ ახალი ციტატა'
                language='geo'
              />
              <AddMovieModalFormFile
                name='thumbnail'
                type='file'
                placeholder='add-photo'
              />
              <button
                type='submit'
                className='w-full text-center text-white text-lg bg-button-red py-2 rounded-[0.3rem]'
              >
                {t('add-quote')}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default AddQuoteModal;
