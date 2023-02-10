/* eslint-disable @next/next/no-img-element */
export const MoviePageHeader = () => {
  return (
    <header className='flex justify-end w-[98.24%]'>
      <div className='w-full lg:w-[77%] xl:w-[77%] 2xl:w-[82%]'>
        <div className='flex w-full items-center justify-between'>
          <h1 className='text-white text-2xl'>My list of movies</h1>
          <div className='flex gap-2 items-center text-white bg-button-red px-3 py-2 rounded cursor-pointer'>
            <img className='w-4' src='/assets/images/plus.png' alt='add' />
            Add movie
          </div>
        </div>
        <p className='text-white'>(Total 25)</p>
      </div>
    </header>
  );
};
export default MoviePageHeader;
