import {
  NavBar,
  Button,
  LandingImages,
  RegistrationModal,
  LoginModal,
} from 'components';
import { imagesData } from 'data';
import { useSwitchModals } from 'hooks';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const {
    showLoginModal,
    showRegistrationModal,
    setShowLoginModal,
    setShowRegistrationModal,
  } = useSwitchModals();
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${
        i18n.language === 'ka' ? 'font-helvetica-geo' : 'font-helvetica-eng'
      } font-medium`}
    >
      {showRegistrationModal && (
        <RegistrationModal setShowLoginModal={setShowLoginModal} />
      )}
      {showLoginModal && (
        <LoginModal setShowRegistrationModal={setShowRegistrationModal} />
      )}
      <section
        className={`${
          (showRegistrationModal || showLoginModal) && 'overflow-hidden'
        } w-full h-screen flex flex-col justify-start items-center bg-dark-bg pt-6`}
      >
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <NavBar
            setShowLoginModal={setShowLoginModal}
            setShowRegistrationModal={setShowRegistrationModal}
          />
          <div className='w-[75%] h-[50vh] 2xl:h-[70vh] 2xl:py-[20rem] text-center flex flex-col justify-center items-center gap-10'>
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
}
