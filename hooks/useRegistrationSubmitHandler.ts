import { createUser, fetchCSRFToken } from 'services';

export default function useRegistrationSubmitHandler(methods: any, t: any) {
  const submit = async (data: any) => {
    try {
      await fetchCSRFToken();
      await createUser(data);
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
