/* eslint-disable @next/next/no-img-element */
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Custom403() {
  const router = useRouter();
  useEffect(() => {
    if (hasCookie('XSRF-TOKEN')) {
      router.push('/news-feed');
    }
  }, []);
  const { t } = useTranslation('forbidden');
  return (
    <div className='w-full text-center h-screen flex flex-col justify-center items-center gap-5 bg-modal-bg text-white'>
      <Head>
        <title>403 Forbidden</title>
      </Head>
      <img src='/assets/images/gandolf.png' alt='forbidden' />
      <h1 className='text-2xl lg:text-5xl font-bold'>{t('title')}</h1>
      <h1 className='text-base lg:text-2xl font-medium px-16'>
        {t('message')}
      </h1>
      <div
        onClick={() => router.push('/')}
        className='bg-button-red px-4 py-2 mt-6 rounded-[0.3rem] text-base lg:text-xl cursor-pointer'
      >
        {t('button')}
      </div>
    </div>
  );
}
export async function getServerSideProps(context: any) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['forbidden'])),
    },
  };
}
