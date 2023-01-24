import { useRouter } from 'next/router';
import { InputsGroupData } from 'data';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useRegistrationSubmitHandler } from 'hooks';
import { InputsType } from 'types';

export default function useRegistrationModalConfig(
  setHasRegistered: (value: boolean) => void
) {
  const router = useRouter();
  const InputsGroup: InputsType[] = InputsGroupData;
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('common');
  const submit = useRegistrationSubmitHandler(methods, setHasRegistered);
  const googleAuthHandler = async () => {
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
