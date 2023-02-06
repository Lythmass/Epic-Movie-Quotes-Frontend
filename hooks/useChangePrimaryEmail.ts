import { useFetchUserInfo } from 'hooks';
import { changePrimaryEmail } from 'services';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import { ToastOptionsType } from 'types';

export default function useChangePrimaryEmail(
  verified: boolean,
  name: string,
  setPrimaryChanged: (value: boolean) => void
) {
  const refetch = useFetchUserInfo();
  const { t } = useTranslation('profile');
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
  const primaryChangerMutation = useMutation(
    (data) => {
      return changePrimaryEmail({ email: data });
    },
    {
      onSuccess: (response) => {
        refetch();
        setPrimaryChanged(true);
        toast.success(t(response.data.message), toastOptions);
      },
      onError: (error: any) => {
        toast.error(t(error.response.data.message), toastOptions);
      },
    }
  );
  const primaryChangerHandler = async (data: any) => {
    if (verified && name !== 'email') {
      primaryChangerMutation.mutate(data);
    }
  };

  return primaryChangerHandler;
}
