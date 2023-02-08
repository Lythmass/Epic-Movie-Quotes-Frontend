/* eslint-disable @next/next/no-img-element */
import { LandingImageType } from 'types';

export const LandingImage: React.FC<LandingImageType> = (props) => {
  return (
    <div className='w-full h-[27rem] lg:h-screen'>
      <div
        style={{ backgroundImage: `url('/assets/images/${props.src}.png')` }}
        className='bg-fixed bg-cover bg-center w-full h-full flex flex-col justify-center items-center'
      >
        <div className='w-[80%] lg:w-full lg:pl-44 lg:pr-[40%] 2xl:pr-[50rem] flex flex-col gap-2 justify-center items-start'>
          <h1 className='relative lg:leading-[4rem] lg:text-5xl  text-left text-white text-xl font-bold'>
            ― “{props.quote}”
          </h1>
          <p className='relative lg:text-2xl 2xl:text-3xl text-left text-zinc-300 font-bold'>
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingImage;
