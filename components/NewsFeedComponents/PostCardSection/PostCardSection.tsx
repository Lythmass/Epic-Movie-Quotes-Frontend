/* eslint-disable @next/next/no-img-element */
export const PostCardSection: React.FC<{ thumbnail: string }> = (props) => {
  return (
    <section className='flex flex-col gap-4'>
      <img
        className='w-full sm:h-[25rem] xl:h-[31.31rem] h-[12.5rem] rounded-[0.625rem] object-cover bg-center'
        src={props.thumbnail}
        alt='thumbnail'
      />
      <div className='flex gap-6'>
        <div className='flex gap-3 items-center'>
          <p className='text-white text-xl'>0</p>
          <img src='/assets/images/chat.png' alt='comments' />
        </div>
        <div className='flex gap-3 items-center'>
          <p className='text-white text-xl'>0</p>
          <img src='/assets/images/heart.png' alt='comments' />
        </div>
      </div>
    </section>
  );
};

export default PostCardSection;
