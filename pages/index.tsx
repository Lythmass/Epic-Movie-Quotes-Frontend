/* eslint-disable @next/next/no-img-element */
import { NavBar, Button, LandingImages } from 'components';

export default function Home() {
  const imagesData = [
    {
      name: 'interstellar',
      title: 'Interstellar, 2014',
      quote: 'You have to leave something behind to go forward',
    },
    {
      name: 'tenenbaums',
      title: 'The Royal Tenenbaums,2001',
      quote: `I think we’re just gonna have to be secretly in love with each other and leave it that`,
    },
    {
      name: 'tlotr',
      title: 'The Lord of the Rings, 2003',
      quote:
        'I see in your eyes the same fear that would take the heart of me...',
    },
  ];
  return (
    <>
      <section className='w-full min-h-screen flex flex-col justify-start items-center bg-dark-bg pt-6'>
        <NavBar />
        <div className='w-[75%] h-[50vh] text-center flex flex-col justify-center items-center gap-10'>
          <h1 className='text-skin-color text-2xl font-bold'>
            Find any quote in millions of movie lines
          </h1>
          <Button text='Get started' color='red' />
        </div>
        <LandingImages imagesData={imagesData} />
      </section>
      <footer className='w-full flex justify-center items-center bg-[#11101A] py-4'>
        <p className='text-skin-color text-xs'>
          © 2023 MOVIE QUOTES. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </>
  );
}
