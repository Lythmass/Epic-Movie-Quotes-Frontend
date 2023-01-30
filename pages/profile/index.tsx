/* eslint-disable @next/next/no-img-element */
import {
  GlobalLayout,
  ProfileHeader,
  MobileInputsBlock,
  DesktopInputsBlock,
  MobileEmailButton,
  SaveOrCancel,
} from 'components';
import { useProfilePageConfig } from 'hooks';
import { FormProvider } from 'react-hook-form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Profile() {
  const { screenWidth, methods, clear, setClear, hasChanged, setHasChanged } =
    useProfilePageConfig();

  return (
    <GlobalLayout>
      <div className='inline-block w-full h-full'>
        {screenWidth <= 1024 && (
          <div className='w-full h-16 flex justify-start items-center px-10'>
            <div className='cursor-pointer'>
              <img
                className='w-5 h-4'
                src='/assets/images/back-arrow.png'
                alt='go-back'
              />
            </div>
          </div>
        )}
        <div className='w-full lg:w-1/2 m-auto lg:relative lg:bg-[#11101A] lg:rounded-xl min-h-[69vh] lg:mt-64 lg:min-h-[30rem] lg:pb-12 lg:mb-36 flex gap-16 flex-col justify-center items-center bg-navbar-color text-white'>
          <ProfileHeader />
          <FormProvider {...methods}>
            <form className='w-full flex justify-center flex-col items-center lg:items-start lg:px-28 gap-4 lg:mt-20'>
              {screenWidth <= 1024 && <MobileInputsBlock />}
              {screenWidth > 1024 && (
                <DesktopInputsBlock
                  clear={clear}
                  clearInputs={setClear}
                  setHasChanged={setHasChanged}
                />
              )}
              {screenWidth <= 1024 && <MobileEmailButton />}
              <div className='absolute bottom-[-5rem] right-0'>
                {screenWidth > 1024 && hasChanged && (
                  <SaveOrCancel
                    clearInputs={setClear}
                    setHasChanged={setHasChanged}
                  />
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </GlobalLayout>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['profile'])),
    },
  };
}
