import { useMutation } from 'react-query';
import { uploadMovie, updateMovie } from 'services';
import { toast } from 'react-toastify';
import { ToastOptionsType } from 'types';
import { useFetchMovies } from 'hooks';
import { useTranslation } from 'next-i18next';

export default function useUploadMovie(action: string, id: number) {
  const refetch = useFetchMovies();
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
  const uploadMovieMutation = useMutation(
    (data) => {
      return uploadMovie(data);
    },
    {
      onSuccess: (response) => {
        toast.success(t(response.data.message), toastOptions);
        refetch();
      },
      onError: (error: any) => {
        toast.error(error.response.data.message, toastOptions);
      },
    }
  );
  const updateMovieMutation = useMutation(
    (data) => {
      return updateMovie(id, data);
    },
    {
      onSuccess: (response) => {
        toast.success(t(response.data.message), toastOptions);
        refetch();
      },
      onError: (error: any) => {
        toast.error(error.response.data.message, toastOptions);
      },
    }
  );
  const submit = (data: any) => {
    let formData = new FormData();
    data['thumbnail'] = data['thumbnail'][0];
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    if (action === 'edit') {
      updateMovieMutation.mutate(data);
    } else {
      uploadMovieMutation.mutate(data);
    }
  };

  return submit;
}
