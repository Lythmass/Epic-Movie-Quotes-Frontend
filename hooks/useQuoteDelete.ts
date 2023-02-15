import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { deleteQuote } from 'services';
import { ToastOptionsType } from 'types';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import { useFetchQuotes } from 'hooks';
import { setQuoteDeleteConfirmationModal } from 'slices/quotesSlice';

export default function useQuoteDelete() {
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  const refetch = useFetchQuotes();
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
  const deleteQuoteMutation = useMutation(
    (quoteId: any) => {
      return deleteQuote(quoteId);
    },
    {
      onSuccess: (response) => {
        toast.success(t(response.data.message), toastOptions);
        dispatch(setQuoteDeleteConfirmationModal(0));
        refetch();
      },
      onError: (error: any) => {
        toast.success(error.response.data.message, toastOptions);
      },
    }
  );
  return {
    deleteQuoteMutation,
    t,
    dispatch,
  };
}
