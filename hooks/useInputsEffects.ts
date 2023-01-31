import { usePasswordConfirmation } from 'hooks';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { validation, registerParameters } from 'helpers';
import { InputsType } from 'types';

export default function useInputsEffects(props: InputsType) {
  const methods: any = useFormContext();
  const { validatePasswordConfirmation } = usePasswordConfirmation(methods);
  const { t } = useTranslation('common');

  const [registerName, validationRule] = registerParameters(
    t,
    props,
    validation,
    validatePasswordConfirmation
  );

  const [inputOutline, setInputOutline] = useState('');
  const [isCorrect, setIsCorrect] = useState('');
  const watchInput = useWatch({
    name: registerName,
    control: methods.control,
  });

  useEffect(() => {
    if (methods.formState.errors[registerName]) {
      setInputOutline('outline outline-2 outline-button-red');
      setIsCorrect('false');
    } else {
      if (watchInput !== undefined && watchInput.length > 0) {
        setInputOutline('outline outline-2 outline-outline-green');
        setIsCorrect('true');
      } else {
        setInputOutline('');
        setIsCorrect('');
      }
    }
  }, [methods, registerName, watchInput]);

  return {
    validationRule,
    registerName,
    methods,
    t,
    inputOutline,
    isCorrect,
  };
}
