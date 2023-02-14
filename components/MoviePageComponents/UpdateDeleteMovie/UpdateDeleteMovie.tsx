/* eslint-disable @next/next/no-img-element */
import { useDispatch } from 'react-redux';
import { setDeleteMovie } from 'slices/moviesSlice';
import { setEditMovie } from 'slices/moviesSlice';
export const UpdateDeleteMovie = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center gap-4 bg-[#24222F] px-7 py-[0.625rem] rounded-[0.625rem]'>
      <img
        onClick={() => dispatch(setEditMovie(true))}
        className='cursor-pointer'
        src='/assets/images/pencil.png'
        alt='edit'
      />
      <p className='text-[#6C757D]'>|</p>
      <img
        onClick={() => dispatch(setDeleteMovie(true))}
        className='cursor-pointer'
        src='/assets/images/delete.png'
        alt='delete'
      />
    </div>
  );
};

export default UpdateDeleteMovie;
