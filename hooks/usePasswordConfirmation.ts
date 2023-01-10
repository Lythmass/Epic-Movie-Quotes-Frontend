import { useWatch } from 'react-hook-form';

export default function usePasswordConfirmation(methods: any) {
  const watchPassword = useWatch({
    name: 'password',
    control: methods.control,
  });
  const validatePasswordConfirmation = {
    validate: (value: string) =>
      value === watchPassword || "Entered password doesn't match.",
  };

  return validatePasswordConfirmation;
}
