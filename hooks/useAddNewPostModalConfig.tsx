import {
  useCloseModal,
  useFetchMovies,
  useFetchNewsFeedQuotes,
  useFetchQuotesLength,
} from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from 'slices/moviesSlice';
import { useTranslation } from 'next-i18next';
import { useMutation } from 'react-query';
import { addNewPost } from 'services';
import { toast } from 'react-toastify';
import { ToastOptionsType } from 'types';
import { useForm } from 'react-hook-form';
import { ToastDesign } from 'helpers';
import { setAddPostModal } from 'slices/newsFeedQuotesSlice';

export default function useAddNewPostModalConfig() {
  useFetchMovies();
  const getMoviesHere = useSelector(getMovies);
  const { t, i18n } = useTranslation('news-feed');
  const refetch = useFetchQuotesLength();
  const { refetch: refetchPosts } = useFetchNewsFeedQuotes();
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
  const movies = getMoviesHere?.map((movie: any) => {
    return {
      value: movie.title.en,
      label: movie.title[i18n.language === 'en' ? 'en' : 'ka'],
      id: movie.id,
    };
  });
  const dispatch = useDispatch();
  const addNewPostMutation = useMutation(
    (data) => {
      return addNewPost(data);
    },
    {
      onSuccess: (response) => {
        toast.success(
          <ToastDesign namespace='news-feed' message={response.data.message} />,
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
        refetchPosts(true);
      },
      onError: (error: any) => {
        toast.success(t(error.response.data.message), toastOptions);
      },
    }
  );
  const submit = (data: any) => {
    let formData = new FormData();
    data['thumbnail'] = data['thumbnail'][0];
    data['movie'] = data['movie']['id'];
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    addNewPostMutation.mutate(data);
  };
  const { modalRef, closeModal } = useCloseModal((value: boolean) =>
    dispatch(setAddPostModal(value))
  );
  return {
    methods,
    t,
    movies,
    dispatch,
    submit,
    modalRef,
    closeModal,
  };
}
