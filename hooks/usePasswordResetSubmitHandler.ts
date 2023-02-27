import { fetchCSRFToken, sendPasswordReset } from 'services';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';

export default function usePasswordResetSubmitHandler(
  methods: any,
  setSuccessResetModal: (value: boolean) => void
) {
  const router = useRouter();
  const submit = async (data: any) => {
    data = {
      ...data,
      email: router.query.email,
      token: router.query.reset_token,
    };
    try {
      await fetchCSRFToken();
      const response = await sendPasswordReset(data);
      if (response.status === 200) {
        setSuccessResetModal(true);
      } else {
        throw 'error';
      }
    } catch (error: any) {
      const errors = error.response.data.message;
      methods.setError('password_confirmation', {
        type: 'manual',
        message: errors,
      });
    }
    if (process.env.NEXT_PUBLIC_API_URL?.substring(0, 5) == 'http:') {
      deleteCookie('XSRF-TOKEN');
    } else {
      deleteCookie('XSRF-TOKEN', {
        path: '/',
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      });
    }
  };
  return submit;
}
