import { useTranslation } from 'next-i18next';
import { useState, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ProfileInputsType } from 'types';

export default function useProfileInputsConfig(props: ProfileInputsType) {
  const { t } = useTranslation('profile');
  const [disabled, setDisabled] = useState(true);
  const setDefaultValue = useRef<HTMLInputElement>(null);
  const methods = useFormContext();

  useEffect(() => {
    if (props.clear) {
      setDefaultValue.current!.value = props.value;
      setDisabled(true);
    }
  }, [props.clear]);

  useEffect(() => {
    if (!disabled) {
      props.setHasChanged(true);
    }
  }, [disabled]);

  const clickHandler = () => {
    if (disabled) {
      props.clearInputs(false);
    }
    setDefaultValue.current!.value = props.value;
    setDisabled((oldValue) => !oldValue);
  };

  return {
    t,
    disabled,
    setDefaultValue,
    methods,
    clickHandler,
  };
}
