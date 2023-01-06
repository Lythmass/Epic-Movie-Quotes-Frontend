/* eslint-disable @next/next/no-img-element */
import { NavBar, Button, LandingImages } from 'components';
import { imagesData } from 'images-data';
export default function Home() {
  return (
    <>
      <section className='w-full h-screen flex flex-col justify-start items-center bg-dark-bg pt-6'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <NavBar />
          <div className='w-[75%] h-[50vh] text-center flex flex-col justify-center items-center gap-10'>
            <h1 className='text-skin-color text-2xl font-bold'>
              Find any quote in millions of movie lines
            </h1>
            <Button text='Get started' color='red' />
          </div>
        </div>
        <div className='w-full'>
          <LandingImages imagesData={imagesData} />
        </div>
      </section>
      <footer className='w-full flex justify-center items-center bg-[#11101A] py-4'>
        <p className='text-skin-color text-xs'>
          © 2023 MOVIE QUOTES. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </>
  );
}
