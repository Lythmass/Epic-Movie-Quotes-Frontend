import { NavBar, Button, LandingImages, RegistrationModal } from 'components';
import { imagesData } from 'data';
import { useState } from 'react';

export default function Home() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  return (
    <>
      {showRegistrationModal && <RegistrationModal />}
      <section
        className={`${
          showRegistrationModal && 'overflow-hidden'
        } w-full h-screen flex flex-col justify-start items-center bg-dark-bg pt-6`}
      >
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <NavBar setShowRegistrationModal={setShowRegistrationModal} />
          <div className='w-[75%] h-[50vh] text-center flex flex-col justify-center items-center gap-10'>
            <h1 className='text-skin-color text-2xl lg:text-3xl 2xl:text-6xl font-bold lg:px-[30%] 2xl:px-[20rem] lg:leading-[3rem] 2xl:leading-[5.8rem]'>
              Find any quote in millions of movie lines
            </h1>
            <Button
              setShowRegistrationModal={setShowRegistrationModal}
              text='Get started'
              color='red'
            />
          </div>
        </div>
        <div className='w-full'>
          <LandingImages imagesData={imagesData} />
        </div>
        <footer className='w-full flex justify-center items-center lg:justify-start lg:px-16 bg-[#11101A] py-4'>
          <p className='text-skin-color text-xs'>
            © 2023 MOVIE QUOTES. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </section>
    </>
  );
}
