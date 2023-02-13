import { FormProvider, useForm } from 'react-hook-form';
import { AddMovieModalInput } from 'components';
import { MoviesInputData } from 'data';
import { useUploadMovie } from 'hooks';
import { useTranslation } from 'next-i18next';

export const AddMovieModalForm = () => {
  const { t } = useTranslation('movies');
  const methods = useForm();
  const displayInputs = MoviesInputData.map((input, index) => {
    return (
      <AddMovieModalInput
        key={index}
        name={input.name}
        placeholder={input.placeholder}
        type={input.type}
        language={input.language}
      />
    );
  });
  const submit = useUploadMovie();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submit)}
        className='py-10 flex flex-col gap-4 w-full'
      >
        {displayInputs}
        <button
          type='submit'
          className='w-full mt-3 cursor-pointer text-white text-center text-xl bg-button-red rounded-[0.3rem] py-2 px-4'
        >
          {t('add-movie')}
        </button>
      </form>
    </FormProvider>
  );
};

export default AddMovieModalForm;
