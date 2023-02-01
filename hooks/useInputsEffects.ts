import { usePasswordConfirmation } from 'hooks';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { validation, registerParameters } from 'helpers';
import { InputsType } from 'types';

export default function useInputsEffects(props: InputsType) {
  const methods: any = useFormContext();
  const { validatePasswordConfirmation } = usePasswordConfirmation(methods);
  const { t } = useTranslation(
    props.namespace === 'profile' ? 'profile' : 'common'
  );

  const [registerName, validationRule] = registerParameters(
    t,
    props,
    validation,
    validatePasswordConfirmation
  );

  const [isCorrect, setIsCorrect] = useState('');
  const watchInput = useWatch({
    name: registerName,
    control: methods.control,
  });

  useEffect(() => {
    if (methods.formState.errors[registerName]) {
      setIsCorrect('false');
    } else {
      if (watchInput !== undefined && watchInput.length > 0) {
        setIsCorrect('true');
      } else {
        setIsCorrect('');
      }
    }
  }, [methods, registerName, watchInput]);

  return {
    validationRule,
    registerName,
    methods,
    t,
    isCorrect,
  };
}
