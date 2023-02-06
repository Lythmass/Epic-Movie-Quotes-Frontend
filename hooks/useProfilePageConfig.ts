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

export default function useProfilePageConfig(response: string) {
  const { t } = useTranslation('profile');
  const screenWidth = useWindowWidth();
  const user = useSelector(selectValue);
  const methods: any = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      password: null,
    },
  });
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
    toast.success(t(message), toastOptions);
  };
  useEffect(() => {
    if (response === 'responses.verified-success') {
      toast.success(t(response), toastOptions);
    }
    if (response === 'responses.already-verified') {
      toast.error(t(response), toastOptions);
    }
  }, []);

  useEffect(() => {
    methods.setValue('username', user?.name);
    methods.setValue('email', user?.email);
    for (let i = 0; i < user?.emails.length; i++) {
      methods.setValue(`email-${i}`, user?.emails[i].email);
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
      },
    }
  );
  const submit = async (data: any) => {
    updateUserDataMutation.mutate(data);
  };
  const showNewEmailModalHere = useSelector(showNewEmailModal);

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
  };
}
