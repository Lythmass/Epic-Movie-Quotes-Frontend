import { setDeleteMovie } from 'slices/moviesSlice';
import { useDeleteConfirmationModalConfig } from 'hooks';

export const DeleteConfirmationModal = () => {
  const { deleteMovieMutation, dispatch, router, t } =
    useDeleteConfirmationModalConfig();
  return (
    <div className='w-full flex justify-center absolute h-full bg-frozen-bg z-[200]'>
      <div className='w-full rounded-xl sm:w-[30rem] sm:h-[25rem] lg:h-[30rem] px-4 text-center flex gap-16 flex-col justify-center items-center mt-[10rem] h-[20rem] bg-modal-bg'>
        <h1 className='text-white font-medium text-2xl'>
          {t('modal.make-sure')}
        </h1>
        <div className='flex items-center gap-8 text-xl text-white'>
          <div
            onClick={() => dispatch(setDeleteMovie(false))}
            className='cursor-pointer'
          >
            {t('modal.cancel')}
          </div>
          <div
            onClick={() => deleteMovieMutation.mutate(router.query.id)}
            className='cursor-pointer bg-button-red px-3 py-2 rounded'
          >
            {t('modal.delete')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
