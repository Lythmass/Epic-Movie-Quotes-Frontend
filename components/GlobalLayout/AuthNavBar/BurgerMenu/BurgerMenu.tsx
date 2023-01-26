/* eslint-disable @next/next/no-img-element */
export default function BurgerMenu(props: {
  burgerMenu: boolean;
  setBurgerMenu: (value: boolean) => void;
}) {
  return (
    <div
      className={`w-full transition-all text-white gap-14 flex flex-col justify-start items-start px-11 pt-11 absolute h-screen bg-[#11101A] top-0 ${
        props.burgerMenu ? 'left-0' : 'left-[-100%]'
      }`}
    >
      <div className='flex gap-5'>
        <img
          className='w-12 h-12 rounded-[50%] object-cover border border-button-red'
          src={`/assets/images/tlotr.png`}
          alt='profile picture'
        />
        <div
          onClick={() => props.setBurgerMenu(false)}
          className='cursor-pointer'
        >
          <h1 className='text-xl'>Gamarjoba </h1>
          <p className='text-sm text-[#CED4DA]'>Edit your profile</p>
        </div>
      </div>
      <div className='flex flex-col gap-8 w-full'>
        <div className='flex gap-10 items-center'>
          <img src='/assets/images/home.png' alt='home' />
          <p className='text-xl'>News feed</p>
        </div>
        <div className='flex gap-10'>
          <img src='/assets/images/camera.png' alt='movies' />
          <p className='text-xl'>List of movies</p>
        </div>
      </div>
    </div>
  );
}
