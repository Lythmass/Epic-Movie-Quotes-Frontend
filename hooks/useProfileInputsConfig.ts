import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { ProfileInputsType } from 'types';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export default function useProfileInputsConfig(props: ProfileInputsType) {
  const validationName =
    props.name === 'username'
      ? 'name'
      : props.name === 'password'
      ? 'profilePassword'
      : props.name;
  const { t } = useTranslation('profile');
  const [disabled, setDisabled] = useState(true);
  const methods: any = useFormContext();
  const user = useSelector(selectValue);
  useEffect(() => {
    if (props.clear) {
      methods.setValue('username', user?.name);
      methods.setValue('password', null);
      methods.clearErrors();
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
    setDisabled((oldValue) => !oldValue);
  };
  const disableClickHandler = () => {
    methods.setValue(props.name, props.name === 'username' ? user?.name : null);
    methods.clearErrors(props.name);
    setDisabled(true);
  };

  return {
    t,
    disabled,
    methods,
    clickHandler,
    validationName,
    disableClickHandler,
  };
}
