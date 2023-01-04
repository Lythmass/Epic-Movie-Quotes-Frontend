import { NavBar, Button } from 'components';

export default function Home() {
  return (
    <>
      <section className='w-full min-h-screen flex flex-col justify-start items-center bg-dark-bg py-6'>
        <NavBar />
        <div className='w-[75%] h-[50vh] text-center flex flex-col justify-center items-center gap-10'>
          <h1 className='text-skin-color text-2xl font-bold'>
            Find any quote in millions of movie lines
          </h1>
          <Button text='Get started' color='red' />
        </div>
      </section>
    </>
  );
}
