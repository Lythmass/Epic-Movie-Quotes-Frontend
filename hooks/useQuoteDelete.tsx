import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { deleteQuote } from 'services';
import { ToastOptionsType } from 'types';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import { useFetchQuotes } from 'hooks';
import {
  setEditQuote,
  setQuoteDeleteConfirmationModal,
} from 'slices/quotesSlice';
import { ToastDesign } from 'helpers';

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
        dispatch(setQuoteDeleteConfirmationModal(0));
        dispatch(setEditQuote(0));
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
