import { useMutation } from 'react-query';
import { useFetchUserInfo } from 'hooks';
import { removeEmail } from 'services';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import { ToastOptionsType } from 'types';
import { ToastDesign } from 'helpers';

export default function useRemoveEmail(value: string) {
  const { t } = useTranslation('profile');
  const deleteQuery = useMutation(
    (data: string) => {
      return removeEmail({ email: data });
    },
    {
      onSuccess: (response) => {
        refetch();
        toast.success(
          <ToastDesign namespace='profile' message={response.data.message} />,
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
      },
      onError: (error: any) => {
        toast.error(t(error.response.data.message), toastOptions);
      },
    }
  );
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
  const refetch = useFetchUserInfo();
  const deleteHandler = async () => {
    deleteQuery.mutate(value);
  };
  return deleteHandler;
}
