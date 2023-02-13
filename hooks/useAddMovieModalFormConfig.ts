import { useForm } from 'react-hook-form';
import { useUploadMovie } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';

export default function useAddMovieModalFormConfig(action: string, movie: any) {
  const { t } = useTranslation('movies');
  const methods = useForm();
  useEffect(() => {
    if (action === 'edit') {
      methods.setValue('title-en', movie['title']?.en);
      methods.setValue('title-ka', movie['title']?.ka);
      methods.setValue('description-en', movie['description']?.en);
      methods.setValue('description-ka', movie['description']?.ka);
      methods.setValue('director-en', movie['director']?.en);
      methods.setValue('director-ka', movie['director']?.ka);
      methods.setValue('budget', movie['budget']);
      methods.setValue('date', movie['year']);
    }
  }, [methods]);
  const submit = useUploadMovie(action, movie?.id);

  return { t, methods, submit };
}
