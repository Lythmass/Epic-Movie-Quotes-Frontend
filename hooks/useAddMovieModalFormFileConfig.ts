import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRef, DragEvent, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export default function useAddMovieModalFormFileConfig() {
  const methods = useFormContext<{ thumbnail: FileList }>();
  const { t } = useTranslation('movies');
  const imageRef = useRef<HTMLInputElement>(null);
  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    imageRef.current!.files = event.dataTransfer.files;
    methods.setValue('thumbnail', event.dataTransfer.files);
  };
  const watchFile = useWatch({
    name: 'thumbnail',
    control: methods.control,
  });
  useEffect(() => {
    const emptyFileList = new DataTransfer().files;
    methods.setValue(
      'thumbnail',
      imageRef.current!.files != null ? imageRef.current!.files : emptyFileList
    );
  }, [watchFile, methods]);
  const windowSize = useWindowWidth();
  return { methods, t, imageRef, dropHandler, windowSize };
}
