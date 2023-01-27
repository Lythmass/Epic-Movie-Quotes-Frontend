/* eslint-disable @next/next/no-img-element */
export default function ProfileHeader() {
  return (
    <div className='text-center lg:absolute lg:top-[-6rem] flex flex-col justify-center items-center gap-2'>
      <img
        className='w-[11.75rem] h-[11.75rem] rounded-[50%] object-cover'
        src='/assets/images/tlotr.png'
        alt='profile picture'
      />
      <p className='text-xl'>Upload new photo</p>
    </div>
  );
}
