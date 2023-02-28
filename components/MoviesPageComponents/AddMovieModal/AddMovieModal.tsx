/* eslint-disable @next/next/no-img-element */
import {
  AddMovieModalHeader,
  AddMovieModalProfile,
  AddMovieModalForm,
} from 'components';
import { useCloseModal, useFetchGenres } from 'hooks';
import { useDispatch } from 'react-redux';
import { setAddMovieModal } from 'slices/addMovieModalSlice';

export const AddMovieModal = () => {
  useFetchGenres();
  const dispatch = useDispatch();
  const { modalRef, closeModal } = useCloseModal((value: boolean) =>
    dispatch(setAddMovieModal(value))
  );
  return (
    <div
      onClick={closeModal}
      className='w-full h-full flex justify-center absolute bg-frozen-bg z-[100]'
    >
      <div
        ref={modalRef}
        className='w-full overflow-x-hidden overflow-y-auto rounded-xl xl:w-[60rem] xl:top-[4rem] h-screen xl:h-[50rem] absolute z-[100] bg-[#11101A] pt-[2.3rem] px-11'
      >
        <AddMovieModalHeader action='add' />
        <hr className='w-screen translate-x-[-2.83rem] bg-[#EFEFEF33] opacity-20 mt-6 mb-10' />
        <AddMovieModalProfile />
        <AddMovieModalForm action='add' />
      </div>
    </div>
  );
};

export default AddMovieModal;
