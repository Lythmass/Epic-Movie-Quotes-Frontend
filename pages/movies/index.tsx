import { GlobalLayout, MovieInstance, MoviePageHeader } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useFetchUserInfo } from 'hooks';
export const Movies = () => {
  useFetchUserInfo();
  return (
    <GlobalLayout>
      <div className='w-full px-[2.4rem] py-4 font-medium h-full mt-[5.35rem]'>
        <MoviePageHeader />
        <div className='w-full flex justify-center lg:justify-end mt-[3.75rem] pb-[5.35rem]'>
          <div className='flex lg:w-[77%] xl:w-[77%] 2xl:w-[82%] flex-col items-center w-full gap-[3.75rem] sm:flex-row sm:flex-wrap sm:justify-start'>
            <MovieInstance
              thumbnail={'interstellar'}
              title='Interstellar'
              year={2014}
              numberOfQuotes={10}
            />
            <MovieInstance
              thumbnail={'tlotr'}
              title='The lord of the rings'
              year={2003}
              numberOfQuotes={69}
            />
            <MovieInstance
              thumbnail={'interstellar'}
              title='Interstellar'
              year={2014}
              numberOfQuotes={10}
            />
            <MovieInstance
              thumbnail={'tlotr'}
              title='The lord of the rings'
              year={2003}
              numberOfQuotes={69}
            />
            <MovieInstance
              thumbnail={'interstellar'}
              title='Interstellar'
              year={2014}
              numberOfQuotes={10}
            />
            <MovieInstance
              thumbnail={'tlotr'}
              title='The lord of the rings'
              year={2003}
              numberOfQuotes={69}
            />
            <MovieInstance
              thumbnail={'interstellar'}
              title='Interstellar'
              year={2014}
              numberOfQuotes={10}
            />
            <MovieInstance
              thumbnail={'tlotr'}
              title='The lord of the rings'
              year={2003}
              numberOfQuotes={69}
            />
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['profile'])),
    },
  };
}

export default Movies;
