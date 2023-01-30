/* eslint-disable @next/next/no-img-element */
export default function GoBackButtonMobile() {
  return (
    <div className='w-full h-9 mt-[6.55rem] flex justify-start items-center px-10'>
      <div className='cursor-pointer h-full'>
        <img
          className='w-5 h-4'
          src='/assets/images/back-arrow.png'
          alt='go-back'
        />
      </div>
    </div>
  );
}
