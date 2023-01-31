import { useFormContext } from 'react-hook-form';
import { usePasswordConfirmation } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export default function usePasswordValidationEffects() {
  const methods: any = useFormContext();
  const { validatePasswordConfirmation, watchPassword } =
    usePasswordConfirmation(methods);
  const { t } = useTranslation('profile');
  const [fifteenOrLess, setFifteenOrLess] = useState(false);
  const [eightOrMore, setEightOrMore] = useState(false);
  useEffect(() => {
    if (watchPassword !== null) {
      if (watchPassword!.length > 0) {
        setFifteenOrLess(true);
      }
      if (watchPassword!.length > 15) {
        setFifteenOrLess(false);
      }
      if (watchPassword!.length >= 8) {
        setEightOrMore(true);
      } else {
        setEightOrMore(false);
      }
    }
  }, [watchPassword]);

  return {
    methods,
    validatePasswordConfirmation,
    t,
    fifteenOrLess,
    eightOrMore,
  };
}
