import { MovieInstanceType } from './MovieInstanceType';

/* eslint-disable @next/next/no-img-element */
export const MovieInstance: React.FC<MovieInstanceType> = (props) => {
  return (
    <div className='flex flex-col gap-4 sm:basis-[45%] lg:basis-[45%] xl:basis-[29%] 2xl:basis-[30%]'>
      <img
        className='w-full h-[18rem] object-cover rounded-xl cursor-pointer'
        src={`/assets/images/${props.thumbnail}.png`}
        alt='thumbnail'
      />
      <h1 className='text-white font-medium text-2xl cursor-pointer'>
        {props.title} ({props.year})
      </h1>
      <div className='text-white font-medium text-xl w-full flex items-center gap-3 cursor-pointer'>
        {props.numberOfQuotes}{' '}
        <img
          className='w-6 h-[1.375rem]'
          src='/assets/images/quote.png'
          alt='quotes'
        />
      </div>
    </div>
  );
};

export default MovieInstance;
