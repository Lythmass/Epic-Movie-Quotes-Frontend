/* eslint-disable @next/next/no-img-element */
import { GlobalLayout, ProfileInputs } from 'components';

export default function profile() {
  return (
    <GlobalLayout>
      <div>
        <div className='w-full h-16 flex justify-start items-center px-10'>
          <div className='w-pointer'>
            <img
              className='w-5 h-4'
              src='/assets/images/back-arrow.png'
              alt='go-back'
            />
          </div>
        </div>
        <div className='w-full min-h-[69vh] flex gap-16 flex-col justify-center items-center bg-navbar-color text-white'>
          <div className='text-center flex flex-col justify-center items-center gap-2'>
            <img
              className='w-[11.75rem] h-[11.75rem] rounded-[50%] object-cover'
              src='/assets/images/tlotr.png'
              alt='profile picture'
            />
            <p className='text-xl'>Upload new photo</p>
          </div>
          <div className='w-full flex justify-center flex-col items-center gap-4'>
            <ProfileInputs type='text' label='Username' data='gamarjoba' />
            <ProfileInputs type='password' label='Password' data='gamarjoba' />
            <div className='flex justify-between items-center w-[80%]'>
              <p>EMAIL</p>
              <img src='/assets/images/front-arrow.png' alt='change email' />
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
