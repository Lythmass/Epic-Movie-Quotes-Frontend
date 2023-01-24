import { useRouter } from 'next/router';
import { InputsGroupData } from 'data';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useAuthorizationSubmitHandler } from 'hooks';
import { InputsType } from 'types';

export default function useAuthModalConfig() {
  const InputsGroup: InputsType[] = InputsGroupData;
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('common');
  const router = useRouter();
  const submit = useAuthorizationSubmitHandler(methods);
  const googleAuthHandler = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/api/google/redirect`);
  };

  return {
    InputsGroup,
    methods,
    t,
    submit,
    googleAuthHandler,
  };
}
