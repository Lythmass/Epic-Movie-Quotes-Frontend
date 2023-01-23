import { fetchCSRFToken, sendForgotPassword } from 'services';
import { useTranslation } from 'next-i18next';
export default function useForgotPasswordSubmitHandler(
  methods: any,
  setResetSentModal: (value: boolean) => void
) {
  const { i18n } = useTranslation('common');
  const submit = async (data: any) => {
    try {
      await fetchCSRFToken();
      const response = await sendForgotPassword({
        ...data,
        locale: i18n.language,
      });
      if (response.status === 200) {
        setResetSentModal(true);
      } else {
        throw 'error';
      }
    } catch (error: any) {
      const userNotFound = error.response.data.message;
      methods.setError('email', {
        type: 'manual',
        message: userNotFound,
      });
    }
  };
  return submit;
}
