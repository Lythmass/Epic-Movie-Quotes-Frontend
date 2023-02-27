import Select from 'react-select';
import { ReactSelectStyles } from 'data';
import { Controller } from 'react-hook-form';
import { useAddMovieModalGenresConfig } from 'hooks';

export const AddMovieModalGenres: React.FC<{ placeholder: string }> = (
  props
) => {
  const { router, movie, t, methods, genres } = useAddMovieModalGenresConfig();
  return (
    <>
      {router.query.id === undefined && (
        <Controller
          control={methods.control}
          defaultValue={genres?.map((genre: any) => genre.value)}
          name='genres'
          render={({ field: { onChange, ref } }) => (
            <Select
              placeholder={t(props.placeholder)}
              styles={ReactSelectStyles}
              onChange={(value) =>
                onChange(value.map((genre: any) => genre.value))
              }
              options={genres}
              isMulti
              ref={ref}
            />
          )}
        />
      )}
      {router.query.id !== undefined && (
        <Controller
          control={methods.control}
          defaultValue={genres?.map((genre: any) => genre.value)}
          name='genres'
          render={({ field: { onChange, ref } }) => (
            <Select
              placeholder={t(props.placeholder)}
              styles={ReactSelectStyles}
              onChange={(value) =>
                onChange(value.map((genre: any) => genre.value))
              }
              options={genres}
              defaultValue={movie}
              isMulti
              ref={ref}
            />
          )}
        />
      )}
    </>
  );
};
export default AddMovieModalGenres;
