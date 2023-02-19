import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postComment } from 'services';
import { selectValue } from 'slices/userInfoSlice';
import { ToastOptionsType } from 'types';

export default function useWriteComment(refetch: any, quoteId?: number) {
  const user = useSelector(selectValue);
  const methods = useForm();
  const { t } = useTranslation('news-feed');
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
  const postCommentMutation = useMutation(
    (data) => {
      return postComment(data);
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
    data['quote_id'] = quoteId;
    postCommentMutation.mutate(data);
    methods.setValue('comment', '');
  };

  return { user, submit, methods, t };
}
