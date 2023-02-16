import { MovieInstanceType } from './MovieInstanceType';
import { useRouter } from 'next/router';

/* eslint-disable @next/next/no-img-element */
export const MovieInstance: React.FC<MovieInstanceType> = (props) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push('movies/' + props.id);
  };
  return (
    <div className='flex w-full flex-col gap-4 sm:basis-[45%] lg:basis-[45%] xl:basis-[29%] 2xl:basis-[30%]'>
      <img
        onClick={clickHandler}
        className='w-full h-[18rem] object-cover rounded-xl cursor-pointer'
        src={props.thumbnail}
        alt='thumbnail'
      />
      <h1
        onClick={clickHandler}
        className='text-white font-medium text-2xl cursor-pointer'
      >
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
