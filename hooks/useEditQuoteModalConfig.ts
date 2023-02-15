import { useEffect, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateQuote } from 'services';
import { editQuote, getQuotes, setEditQuote } from 'slices/quotesSlice';
import { ToastOptionsType } from 'types';
import { useFetchQuotes } from 'hooks';

export default function useEditQuoteModalConfig() {
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
  const methods: any = useForm();
  const imageRef = useRef<HTMLImageElement>(null);
  const getQuotesHere = useSelector(getQuotes);
  const getId = useSelector(editQuote);
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  const refetch = useFetchQuotes();
  const quote = getQuotesHere?.filter((quote: { id: number }) => {
    return quote.id == getId;
  })[0];

  const updateQuoteMutation = useMutation(
    (data) => {
      return updateQuote(data, getId);
    },
    {
      onSuccess: (response) => {
        toast.success(t(response.data.message), toastOptions);
        dispatch(setEditQuote(0));
        refetch();
      },
      onError: (error: any) => {
        toast.success(t(error.response.data.message), toastOptions);
      },
    }
  );
  const watchThumbnail = useWatch({
    name: 'thumbnail',
    control: methods.control,
  });
  useEffect(() => {
    if (quote != undefined) {
      methods.setValue('quote-en', quote.quote.en);
      methods.setValue('quote-ka', quote.quote.ka);
    }
  }, [quote]);
  useEffect(() => {
    if (watchThumbnail !== undefined) {
      imageRef.current!.src = URL.createObjectURL(watchThumbnail[0]);
    }
  }, [watchThumbnail]);

  const submit = (data: any) => {
    console.log(data);
    let formData = new FormData();
    data['thumbnail'] = data['thumbnail'][0];
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    updateQuoteMutation.mutate(data);
  };

  return { submit, t, methods, quote, imageRef };
}
