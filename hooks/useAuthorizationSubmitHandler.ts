import { fetchCSRFToken, authenticateUser } from 'services';
import { useTranslation } from 'next-i18next';

export default function useAuthorizationSubmitHandler(methods: any) {
  const { t } = useTranslation('common');

  const submit = async (data: any) => {
    try {
      await fetchCSRFToken();
      await authenticateUser(data);
    } catch (error: any) {
      const userNotFound = t(error.response.data.error);
      methods.setError('password', {
        type: 'manual',
        message: userNotFound,
      });
    }
  };

  return submit;
}
