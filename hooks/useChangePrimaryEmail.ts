import { useFetchUserInfo } from 'hooks';
import { changePrimaryEmail } from 'services';
import { useMutation } from 'react-query';

export default function useChangePrimaryEmail(
  verified: boolean,
  name: string,
  setPrimaryChanged: (value: boolean) => void
) {
  const refetch = useFetchUserInfo();
  const primaryChangerMutation = useMutation(
    (data) => {
      return changePrimaryEmail({ email: data });
    },
    {
      onSuccess: () => {
        refetch();
        setPrimaryChanged(true);
      },
    }
  );
  const primaryChangerHandler = async (data: any) => {
    if (verified && name !== 'email') {
      const response = primaryChangerMutation.mutate(data);
      console.log(response);
    }
  };

  return primaryChangerHandler;
}
