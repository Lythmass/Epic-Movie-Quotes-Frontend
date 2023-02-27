import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { useGetSingleMovie } from 'hooks';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { uploadQuote } from 'services';
import { toast } from 'react-toastify';
import { ToastOptionsType } from 'types';
import { useFetchQuotes } from 'hooks';
import { ToastDesign } from 'helpers';

export default function useAddQuoteModalConfig() {
  const { t } = useTranslation('movies');
  const dispatch = useDispatch();
  const movie = useGetSingleMovie();
  const methods = useForm();
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
  const refetch = useFetchQuotes();
  const uploadQuoteMutation = useMutation(
    (data) => {
      return uploadQuote(data, movie?.id);
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
    uploadQuoteMutation.mutate(data);
  };

  return { dispatch, methods, submit, t, movie };
}
