/* eslint-disable @next/next/no-img-element */
export default function LandingImage(props: {
  src: string;
  alt: string;
  quote: string;
  title: string;
}) {
  return (
    <div className='w-full relative'>
      <div className='absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 flex flex-col gap-2 w-[80%] justify-center'>
        <h1 className='text-left text-white text-xl font-bold'>
          “{props.quote}”
        </h1>
        <p className='text-left text-zinc-300 font-bold'>{props.title}</p>
      </div>
      <img
        className='w-full h-[27rem] object-cover'
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
