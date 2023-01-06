/* eslint-disable @next/next/no-img-element */
export default function LandingImage(props: {
  src: string;
  quote: string;
  title: string;
}) {
  return (
    <div className='w-full h-[27rem]'>
      <div
        className={`bg-[url('/assets/images/${props.src}.png')] bg-fixed bg-cover bg-center w-full h-full flex flex-col justify-center items-center`}
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
