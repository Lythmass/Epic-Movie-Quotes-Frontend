import { FormProvider } from 'react-hook-form';
import { AddMovieModalInput } from 'components';
import { MoviesInputConfig } from 'config';
import { useAddMovieModalFormConfig } from 'hooks';
import { MovieType } from 'types';

export const AddMovieModalForm: React.FC<{
  action: string;
  movie?: MovieType;
}> = (props) => {
  const { t, methods, submit } = useAddMovieModalFormConfig(
    props.action,
    props.movie
  );
  const displayInputs = MoviesInputConfig.map((input, index) => {
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
