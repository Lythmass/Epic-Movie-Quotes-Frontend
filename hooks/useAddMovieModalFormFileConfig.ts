import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';

export default function useAddMovieModalFormFileConfig(name: string) {
  const methods: any = useFormContext();
  const { t } = useTranslation('movies');
  const imageRef = useRef<HTMLInputElement>(null);
  const dropHandler = (event: any) => {
    event.preventDefault();
    imageRef.current!.files = event.dataTransfer.files;
    methods.setValue(name, event.dataTransfer.files);
  };
  const windowSize = useWindowWidth();
  return { methods, t, imageRef, dropHandler, windowSize };
}
