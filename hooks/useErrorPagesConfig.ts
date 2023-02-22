import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

export default function useErrorPagesConfig(namespace: string) {
  const router = useRouter();
  useEffect(() => {
    if (hasCookie('XSRF-TOKEN')) {
      router.push('/news-feed');
    }
  }, []);
  const { t } = useTranslation(namespace);
  return { router, t };
}
