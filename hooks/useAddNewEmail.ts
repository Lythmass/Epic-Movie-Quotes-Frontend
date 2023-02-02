import { useFetchUserInfo } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { addNewEmail } from 'services';
import { setShowNewEmailModal } from 'slices/newEmailModalSlice';

export default function useAddNewEmail() {
  const refetch = useFetchUserInfo();
  const { t } = useTranslation('profile');
  const methods = useForm({ mode: 'all' });
  const dispatch = useDispatch();
  const submitQuery = useMutation(
    (data) => {
      return addNewEmail(data);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  const submit = (data: any) => {
    try {
      submitQuery.mutate(data);
      dispatch(setShowNewEmailModal(false));
    } catch (errors: any) {
      console.log(errors);
    }
  };

  return {
    t,
    methods,
    submit,
    dispatch,
  };
}
