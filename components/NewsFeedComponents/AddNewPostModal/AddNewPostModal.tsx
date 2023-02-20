/* eslint-disable @next/next/no-img-element */
import { FormProvider, Controller } from 'react-hook-form';
import {
  AddMovieModalProfile,
  AddMovieModalFormTextarea,
  AddMovieModalFormFile,
} from 'components/MoviesPageComponents';
import Select from 'react-select';
import { setAddPostModal } from 'slices/newsFeedQuotesSlice';
import { useAddNewPostModalConfig } from 'hooks';
import { SingleDropDownStyles } from 'data';

export const AddNewPostModal = () => {
  const { methods, t, movies, dispatch, submit } = useAddNewPostModalConfig();
  return (
    <div className='absolute z-[100] flex xl:pt-[4rem] justify-center bg-frozen-bg w-full h-full'>
      <div className='absolute lg:w-[70%] rounded-xl xl:w-[50%] lg:h-[50rem] overflow-x-hidden px-11 bg-modal-bg w-full h-screen'>
        <header className='flex justify-center items-center py-8'>
          <h1 className='text-white font-medium text-xl flex justify-center w-full'>
            {t('new-quote')}
          </h1>
          <img
            onClick={() => dispatch(setAddPostModal(false))}
            className='w-[0.875rem] h-[0.875rem] cursor-pointer'
            src='/assets/images/close.png'
            alt='close'
          />
        </header>
        <hr className='w-screen translate-x-[-2.83rem] bg-[#EFEFEF33] opacity-20 mb-8' />
        <AddMovieModalProfile />
        <div className='w-full pb-10'>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(submit)}
              className='flex flex-col mt-8 gap-5'
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
              <Controller
                control={methods.control}
                defaultValue={movies?.map((movie: any) => movie.id)}
                name='movie'
                render={({ field: { ref, onChange } }) => (
                  <Select
                    onChange={(value) => onChange(value)}
                    placeholder={
                      <div className='flex items-center justify-start gap-3'>
                        <img src='/assets/images/camera.png' alt='camera' />
                        <h1>{t('choose-movie')}</h1>
                      </div>
                    }
                    menuPlacement='top'
                    styles={SingleDropDownStyles}
                    options={movies}
                    ref={ref}
                  />
                )}
              />
              <button
                type='submit'
                className='w-full text-center text-white text-lg bg-button-red py-2 rounded-[0.3rem]'
              >
                {t('post')}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default AddNewPostModal;
