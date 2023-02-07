/* eslint-disable @next/next/no-img-element */
import { FeedbackModalType } from 'types';

export const FeedbackModals: React.FC<FeedbackModalType> = (props) => {
  return (
    <div className='w-full backdrop-blur-sm h-full fixed lg:bg-frozen-bg lg:bg-none bg-modal-bg z-50 flex justify-center items-start pt-[5rem] lg:pt-[9rem]'>
      <div className='flex flex-col justify-center items-center text-center gap-8 text-white w-[75%] lg:w-[40rem] h-[30rem] bg-modal-overlay-bg lg:bg-[#222030] lg:bg-none rounded-[0.625rem]'>
        <img src={`/assets/images/${props.image}.png`} alt={props.image} />
        <h1 className='text-2xl lg:text-[2rem] font-bold'>{props.title}</h1>
        <p className='w-[75%]'>{props.description}</p>
        <a
          className='px-[2.3rem] lg:w-[75%] rounded-[0.25rem] py-2 bg-button-red'
          href={`${props.route}`}
          target='_blank'
          rel='noreferrer'
        >
          {props.action}
        </a>
      </div>
    </div>
  );
};

export default FeedbackModals;
