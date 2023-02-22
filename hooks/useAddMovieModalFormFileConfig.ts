import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRef, DragEvent } from 'react';
import { useFormContext } from 'react-hook-form';

export default function useAddMovieModalFormFileConfig() {
  const methods = useFormContext<{ thumbnail: FileList }>();
  const { t } = useTranslation('movies');
  const imageRef = useRef<HTMLInputElement>(null);
  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    imageRef.current!.files = event.dataTransfer.files;
    methods.setValue('thumbnail', event.dataTransfer.files);
  };
  const windowSize = useWindowWidth();
  return { methods, t, imageRef, dropHandler, windowSize };
}
