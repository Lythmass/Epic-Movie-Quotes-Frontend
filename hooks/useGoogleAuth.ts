import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchCSRFToken, authenticateUserUsingGoogle } from 'services';

export default function useGoogleAuth(googleId: string) {
  const router = useRouter();
  const [getCSRF, setCSRF] = useState(null);
  useEffect(() => {
    if (googleId !== undefined && getCSRF === null) {
      const submit = async () => {
        const response = await fetchCSRFToken();
        setCSRF(response.data);
      };
      submit();
    }
  }, []);

  useEffect(() => {
    if (googleId !== undefined && getCSRF !== null) {
      const submit = async () => {
        await authenticateUserUsingGoogle(googleId);
        router.push('/profile');
      };
      submit();
    }
  }, [getCSRF]);
}
