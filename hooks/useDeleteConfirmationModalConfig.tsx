import { useDispatch } from 'react-redux';
import { setDeleteMovie } from 'slices/moviesSlice';
import { useMutation } from 'react-query';
import { deleteMovie } from 'services';
import { toast } from 'react-toastify';
import { ToastOptionsType } from 'types';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import useFetchQuotes from './useFetchQuotes';
import { ToastDesign } from 'helpers';

export default function useDeleteConfirmationModalConfig() {
  const dispatch = useDispatch();
  const router = useRouter();
  const refetch = useFetchQuotes();
  const { t } = useTranslation('movies');
  const toastOptions: ToastOptionsType = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  };
  const deleteMovieMutation = useMutation(
    (id: any) => {
      return deleteMovie(id);
    },
    {
      onSuccess: (response) => {
        toast.success(
          <ToastDesign namespace='movies' message={response.data.message} />,
          {
            style: {
              background: '#BADBCC',
              color: '#0F5132',
              marginBottom: '3rem',
            },
            icon: false,
            ...toastOptions,
          }
        );
        dispatch(setDeleteMovie(false));
        refetch();
        router.push('/movies');
      },
      onError: (error: any) => {
        toast.success(error.response.data.message, toastOptions);
      },
    }
  );

  return { deleteMovieMutation, dispatch, router, t };
}
