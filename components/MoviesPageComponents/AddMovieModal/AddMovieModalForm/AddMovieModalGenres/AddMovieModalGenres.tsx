import { useSelector } from 'react-redux';
import { getGenres } from 'slices/moviesSlice';
import Select from 'react-select';
import { ReactSelectStyles } from 'data';
import { useTranslation } from 'next-i18next';
import { useFormContext, Controller } from 'react-hook-form';

export const AddMovieModalGenres: React.FC<{ placeholder: string }> = (
  props
) => {
  const { t } = useTranslation('movies');
  const methods = useFormContext();
  const genres = useSelector(getGenres)?.map((genre: { name: string }) => {
    return {
      value: genre.name.toLowerCase(),
      label: t('genres.' + genre.name),
    };
  });

  return (
    <Controller
      control={methods.control}
      defaultValue={genres?.map((genre: any) => genre.value)}
      name='genres'
      render={({ field: { onChange, ref } }) => (
        <Select
          placeholder={t(props.placeholder)}
          styles={ReactSelectStyles}
          onChange={(value) => onChange(value.map((genre: any) => genre.value))}
          options={genres}
          isMulti
          ref={ref}
        />
      )}
    />
  );
};
export default AddMovieModalGenres;
