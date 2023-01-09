/* eslint-disable @next/next/no-img-element */
import { LandingImageType } from 'types';

export default function LandingImage(props: LandingImageType) {
  return (
    <div className='w-full h-[27rem]'>
      <div
        style={{ backgroundImage: `url('/assets/images/${props.src}.png')` }}
        className='bg-fixed bg-cover bg-center w-full h-full flex flex-col justify-center items-center'
      >
        <div className='w-[80%] flex flex-col gap-2 justify-center items-start'>
          <h1 className='relative text-left text-white text-xl font-bold'>
            ― “{props.quote}”
          </h1>
          <p className='relative text-left text-zinc-300 font-bold'>
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}
