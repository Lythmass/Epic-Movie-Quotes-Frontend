import {
  AddMovieModalForm,
  AddMovieModalHeader,
  AddMovieModalProfile,
} from 'components';
import { useEditMovieModalConfig } from 'hooks';

export const EditMovieModal = () => {
  const movie = useEditMovieModalConfig();
  return (
    <div className='w-full h-full flex justify-center absolute bg-frozen-bg z-[100]'>
      <div className='w-full overflow-x-hidden overflow-y-auto rounded-xl xl:w-[60rem] xl:top-[4rem] h-screen xl:h-[50rem] absolute z-[100] bg-[#11101A] pt-[2.3rem] px-11'>
        <AddMovieModalHeader action='edit' />
        <hr className='w-screen translate-x-[-2.83rem] bg-[#EFEFEF33] opacity-20 mt-6 mb-10' />
        <AddMovieModalProfile />
        {Object.keys(movie).length > 0 && (
          <AddMovieModalForm action='edit' movie={movie} />
        )}
      </div>
    </div>
  );
};
export default EditMovieModal;
