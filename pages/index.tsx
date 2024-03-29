import { NavBar, Button, LandingImages, ConditionalModals } from 'components';
import { imagesData } from 'data';
import { useSwitchModals } from 'hooks';
import { useTranslation } from 'next-i18next';
import { markEmailAsVerified, verifySecondaryEmail } from 'services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export const Home: React.FC<{
  response: string;
  googleId: string;
}> = (props) => {
  const {
    showLoginModal,
    showRegistrationModal,
    hasRegistered,
    showForgotPasswordModal,
    resetSentModal,
    passwordResetModal,
    successResetModal,
    setShowLoginModal,
    setShowRegistrationModal,
    setHasRegistered,
    setShowForgotPasswordModal,
    setResetSentModal,
    setPasswordResetModal,
    setSuccessResetModal,
  } = useSwitchModals(props.googleId);
  const { t, i18n } = useTranslation('common');

  return (
    <div
      className={`${
        i18n.language === 'ka' ? 'font-helvetica-geo' : 'font-helvetica-eng'
      } font-medium`}
    >
      <Head>
        <title>Landing page</title>
      </Head>
      <ConditionalModals
        resetSentModal={resetSentModal}
        setResetSentModal={setResetSentModal}
        showRegistrationModal={showRegistrationModal}
        setShowLoginModal={setShowLoginModal}
        showLoginModal={showLoginModal}
        setShowRegistrationModal={setShowRegistrationModal}
        hasRegistered={hasRegistered}
        setHasRegistered={setHasRegistered}
        showForgotPasswordModal={showForgotPasswordModal}
        setShowForgotPasswordModal={setShowForgotPasswordModal}
        passwordResetModal={passwordResetModal}
        setPasswordResetModal={setPasswordResetModal}
        setSuccessResetModal={setSuccessResetModal}
        successResetModal={successResetModal}
        response={props.response}
      />
      <section
        className={`${
          (showRegistrationModal ||
            showLoginModal ||
            hasRegistered ||
            showForgotPasswordModal ||
            resetSentModal ||
            passwordResetModal ||
            successResetModal ||
            props.response === '"Successfully verified!"') &&
          'overflow-hidden'
        } w-full h-screen flex flex-col justify-start items-center bg-dark-bg pt-6`}
      >
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <NavBar
            setShowLoginModal={setShowLoginModal}
            setShowRegistrationModal={setShowRegistrationModal}
          />
          <div className='w-[75%] h-[50vh] 2xl:h-[50rem] 2xl:py-[20rem] text-center flex flex-col justify-center items-center gap-10'>
            <h1 className='text-skin-color text-2xl lg:text-3xl 2xl:text-6xl font-bold lg:px-[30%] 2xl:px-[13rem] lg:leading-[3rem] 2xl:leading-[5.8rem]'>
              {t('header')}
            </h1>
            <Button
              setShowModal={setShowRegistrationModal}
              text={t('buttons.get-started')}
              color='red'
            />
          </div>
        </div>
        <div className='w-full'>
          <LandingImages imagesData={imagesData} />
        </div>
        <footer className='w-full flex justify-center items-center lg:justify-start lg:px-16 bg-[#11101A] py-4'>
          <p className='text-skin-color text-xs'>© 2023 {t('footer')}</p>
        </footer>
      </section>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const translations = await serverSideTranslations(context.locale, ['common']);
  if (context.query.google_id !== undefined) {
    return {
      props: {
        googleId: context.query.google_id,
        ...translations,
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
        response: JSON.stringify(response.data.message),
        ...translations,
      },
    };
  }
  if (context.query.email_verify_url !== undefined) {
    const index = context.query.email_verify_url?.search('verify/') + 7;
    const path =
      context.query.email_verify_url?.substr(index) +
      '&signature=' +
      context.query.signature;
    const response = await markEmailAsVerified(path);
    return {
      props: {
        response: JSON.stringify(response.data.message),
        ...translations,
      },
    };
  }
  if (
    context.query.reset_token !== undefined &&
    context.query.email !== undefined
  ) {
    return {
      props: {
        response: 'Reset password',
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

export default Home;
