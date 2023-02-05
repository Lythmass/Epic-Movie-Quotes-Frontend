/* eslint-disable @next/next/no-img-element */
import {
  GlobalLayout,
  ProfileHeader,
  MobileInputsBlock,
  DesktopInputsBlock,
  MobileEmailButton,
  SaveOrCancel,
  GoBackButtonMobile,
  AddNewEmailModal,
} from 'components';
import { useProfilePageConfig } from 'hooks';
import { FormProvider } from 'react-hook-form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { verifySecondaryEmail } from 'services';

export default function Profile(props: { response: string }) {
  const {
    screenWidth,
    methods,
    clear,
    setClear,
    hasChanged,
    setHasChanged,
    saveProfilePicture,
    setSaveProfilePicture,
    submit,
    showNewEmailModalHere,
  } = useProfilePageConfig(props.response);

  return (
    <GlobalLayout>
      <div className='inline-block w-full h-full'>
        {showNewEmailModalHere === true && <AddNewEmailModal />}
        {screenWidth <= 1024 && <GoBackButtonMobile />}
        <div className='w-full lg:w-[60%] m-auto lg:relative lg:bg-[#11101A] lg:rounded-xl min-h-[69vh] lg:mt-64 lg:min-h-[30rem] lg:pb-12 lg:mb-36 flex gap-16 flex-col justify-center items-center bg-navbar-color text-white'>
          <ProfileHeader
            setHasChanged={setHasChanged}
            setSaveProfilePicture={setSaveProfilePicture}
            saveProfilePicture={saveProfilePicture}
          />
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(submit)}
              className='w-full flex justify-center flex-col items-center lg:items-start lg:px-28 gap-4 lg:mt-20'
            >
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
                    saveProfilePicture={saveProfilePicture}
                    setSaveProfilePicture={setSaveProfilePicture}
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
  if (context.query.verify_secondary_email !== undefined) {
    const id = context.query.verify_secondary_email;
    const token = context.query.token;
    const email = context.query.email;
    const response = await verifySecondaryEmail(id, token, email);
    return {
      props: {
        response: response.data.message,
        ...(await serverSideTranslations(context.locale, ['profile'])),
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['profile'])),
    },
  };
}
