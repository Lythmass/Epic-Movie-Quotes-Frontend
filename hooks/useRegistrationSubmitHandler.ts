import { createUser, fetchCSRFToken } from 'services';
import { useTranslation } from 'next-i18next';
export default function useRegistrationSubmitHandler(
  methods: any,
  setHasRegistered: (value: boolean) => void
) {
  const { t, i18n } = useTranslation('common');
  const submit = async (data: any) => {
    try {
      await fetchCSRFToken();
      const response = await createUser({ ...data, locale: i18n.language });
      if (response.data.message === 'Registered Successfully!') {
        setHasRegistered(true);
      }
    } catch (error: any) {
      const errors = error.response.data.errors;
      Object.keys(errors).forEach((eachError) => {
        const translatedError = t(errors[eachError]);
        methods.setError(eachError, {
          type: 'manual',
          message: translatedError,
        });
      });
    }
  };

  return submit;
}
