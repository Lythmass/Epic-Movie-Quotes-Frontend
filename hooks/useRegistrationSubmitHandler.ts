import { createUser, fetchCSRFToken } from 'services';

export default function useRegistrationSubmitHandler(
  methods: any,
  t: any,
  setHasRegistered: (value: boolean) => void
) {
  const submit = async (data: any) => {
    try {
      await fetchCSRFToken();
      const response = await createUser(data);
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
