import { useFetchUserInfo } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { addNewEmail } from 'services';
import { setShowNewEmailModal } from 'slices/newEmailModalSlice';
import { toast } from 'react-toastify';

export default function useAddNewEmail() {
  const refetch = useFetchUserInfo();
  const { t, i18n } = useTranslation('profile');
  const methods = useForm({ mode: 'all' });
  const dispatch = useDispatch();
  const toastOptions: any = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  };
  const submitQuery = useMutation(
    (data: any) => {
      return addNewEmail({ ...data, locale: i18n.language });
    },
    {
      onSuccess: (response) => {
        refetch();
        toast.success(t(response.data.message), toastOptions);
      },
      onError(error: any) {
        toast.error(t(error.response.data.message), toastOptions);
      },
    }
  );
  const submit = (data: any) => {
    submitQuery.mutate(data);
    dispatch(setShowNewEmailModal(false));
  };

  return {
    t,
    methods,
    submit,
    dispatch,
  };
}
