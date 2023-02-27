import { useForm } from 'react-hook-form';
import { useWindowWidth, useFetchUserInfo } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';
import { updateUserData } from 'services';
import { showNewEmailModal } from 'slices/newEmailModalSlice';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import { ToastOptionsType } from 'types';
import { setMobileConfirmationModal } from 'slices/mobileConfirmationModalSlice';
import { showNewEmailModalMobile } from 'slices/newEmailModalSlice';
import { useDispatch } from 'react-redux';
import { getNotificationModal } from 'slices/newsFeedQuotesSlice';
import { ToastDesign } from 'helpers';
import { useRouter } from 'next/router';

export default function useProfilePageConfig(response: string) {
  const { t } = useTranslation('profile');
  const router = useRouter();
  const screenWidth = useWindowWidth();
  const [showEmailsModal, setShowEmailsModal] = useState(false);
  const [enableProfileModalEdit, setEnableProfileModalEdit] = useState('');
  const user = useSelector(selectValue);
  const methods: any = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      password: null,
    },
  });
  const dispatch = useDispatch();
  const refetch = useFetchUserInfo();
  const [clear, setClear] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [saveProfilePicture, setSaveProfilePicture] = useState('no');
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
  const notify = (message: string) => {
    toast.success(<ToastDesign namespace='profile' message={message} />, {
      style: {
        background: '#BADBCC',
        color: '#0F5132',
        marginBottom: '3rem',
      },
      icon: false,
      ...toastOptions,
    });
  };
  useEffect(() => {
    if (response === 'responses.verified-success') {
      toast.success(<ToastDesign namespace='profile' message={response} />, {
        style: {
          background: '#BADBCC',
          color: '#0F5132',
          marginBottom: '3rem',
        },
        icon: false,
        ...toastOptions,
      });
      toast.success(t(response), toastOptions);
      router.push('/profile');
    }
    if (response === 'responses.already-verified') {
      toast.error(t(response), toastOptions);
      router.push('/profile');
    }
  }, []);

  useEffect(() => {
    if (user?.google_id !== null) {
      methods.setValue('username', user?.name);
      methods.setValue('email', user?.email);
    } else {
      methods.setValue('username', user?.name);
      methods.setValue('email', user?.email);
      for (let i = 0; i < user?.emails.length; i++) {
        methods.setValue(`email-${i}`, user?.emails[i].email);
      }
    }
  }, [user, methods]);

  const updateUserDataMutation = useMutation(
    (data: any) => {
      return updateUserData(data);
    },
    {
      onSuccess: (response) => {
        refetch();
        notify(response.data.message);
        dispatch(setMobileConfirmationModal(false));
        setHasChanged(false);
        setClear(true);
      },
    }
  );
  const submit = async (data: any) => {
    updateUserDataMutation.mutate(data);
  };
  const showNewEmailModalHere = useSelector(showNewEmailModal);
  const showNewEmailModalMobileHere = useSelector(showNewEmailModalMobile);
  const getNotificationsModalHere = useSelector(getNotificationModal);
  return {
    screenWidth,
    methods,
    clear,
    setClear,
    hasChanged,
    setHasChanged,
    saveProfilePicture,
    setSaveProfilePicture,
    submit,
    showNewEmailModalHere,
    setShowEmailsModal,
    showEmailsModal,
    showNewEmailModalMobileHere,
    enableProfileModalEdit,
    setEnableProfileModalEdit,
    user,
    getNotificationsModalHere,
  };
}
