/* eslint-disable @next/next/no-img-element */
import {
  GlobalLayout,
  ProfileHeader,
  GoBackButtonMobile,
  AddNewEmailModal,
  AddNewEmailModalMobile,
  EmailProfile,
  GoogleProfile,
  NotificationsModal,
} from 'components';
import { useProfilePageConfig } from 'hooks';
import { FormProvider } from 'react-hook-form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { verifySecondaryEmail } from 'services';
import Head from 'next/head';
import { hasCookie } from 'cookies-next';

export const Profile: React.FC<{ response: string }> = (props) => {
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
    setShowEmailsModal,
    showEmailsModal,
    showNewEmailModalMobileHere,
    enableProfileModalEdit,
    setEnableProfileModalEdit,
    user,
    getNotificationsModalHere,
  } = useProfilePageConfig(props.response);
  return (
    <GlobalLayout>
      <>
        <Head>
          <title>Profile</title>
        </Head>
        {getNotificationsModalHere && <NotificationsModal />}
        <div className='inline-block w-full h-full'>
          {showNewEmailModalHere === true && <AddNewEmailModal />}
          {showNewEmailModalMobileHere === true && <AddNewEmailModalMobile />}
          {screenWidth <= 1024 && (
            <GoBackButtonMobile
              setEnableProfileModalEdit={setEnableProfileModalEdit}
              setShowEmailsModal={setShowEmailsModal}
            />
          )}
          <div className='w-full lg:w-[63%] xl:w-[50%] m-auto lg:relative lg:bg-[#11101A] lg:rounded-xl min-h-[69vh] lg:mt-64 lg:min-h-[30rem] lg:pb-12 lg:mb-36 flex gap-16 flex-col justify-center items-center bg-navbar-color text-white'>
            <ProfileHeader
              setHasChanged={setHasChanged}
              setSaveProfilePicture={setSaveProfilePicture}
              hasChanged={hasChanged}
              saveProfilePicture={saveProfilePicture}
            />
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(submit)}
                className='w-full flex justify-center flex-col items-center lg:items-start lg:px-28 gap-4 lg:mt-20'
              >
                {user?.google_id !== null && (
                  <GoogleProfile
                    clear={clear}
                    setClear={setClear}
                    setHasChanged={setHasChanged}
                    hasChanged={hasChanged}
                    saveProfilePicture={saveProfilePicture}
                    setSaveProfilePicture={setSaveProfilePicture}
                    screenWidth={screenWidth}
                    setEnableProfileModalEdit={setEnableProfileModalEdit}
                    enableProfileModalEdit={enableProfileModalEdit}
                  />
                )}
                {user?.google_id === null && (
                  <EmailProfile
                    screenWidth={screenWidth}
                    setEnableProfileModalEdit={setEnableProfileModalEdit}
                    enableProfileModalEdit={enableProfileModalEdit}
                    clear={clear}
                    setClear={setClear}
                    setHasChanged={setHasChanged}
                    setShowEmailsModal={setShowEmailsModal}
                    showEmailsModal={showEmailsModal}
                    hasChanged={hasChanged}
                    saveProfilePicture={saveProfilePicture}
                    setSaveProfilePicture={setSaveProfilePicture}
                  />
                )}
              </form>
            </FormProvider>
          </div>
        </div>
      </>
    </GlobalLayout>
  );
};

export async function getServerSideProps(context: any) {
  const translations = await serverSideTranslations(context.locale, [
    'news-feed',
    'profile',
  ]);
  const code = !hasCookie('XSRF-TOKEN', context) ? 403 : 200;
  if (code == 403 && context.query.verify_secondary_email != undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/' + context.req.url.substring(8),
      },
    };
  }
  if (code == 403) {
    return {
      redirect: {
        permanent: false,
        destination: '/403',
      },
    };
  }
  if (context.query.verify_secondary_email !== undefined) {
    const id = context.query.verify_secondary_email;
    const token = context.query.token;
    const email = context.query.email;
    const response = await verifySecondaryEmail(id, token, email);
    return {
      props: {
        response: response.data.message,
        ...translations,
      },
    };
  }
  return {
    props: {
      ...translations,
    },
  };
}

export default Profile;
