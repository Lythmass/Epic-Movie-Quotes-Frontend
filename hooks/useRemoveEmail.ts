import { useMutation } from 'react-query';
import { useFetchUserInfo } from 'hooks';
import { removeEmail } from 'services';

export default function useRemoveEmail(value: string) {
  const deleteQuery = useMutation(
    (data: string) => {
      return removeEmail({ email: data });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  const refetch = useFetchUserInfo();
  const deleteHandler = async () => {
    try {
      deleteQuery.mutate(value);
    } catch (errors: any) {
      console.log(errors);
    }
  };
  return deleteHandler;
}
