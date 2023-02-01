import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { ProfileInputsType } from 'types';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export default function useProfileInputsConfig(props: ProfileInputsType) {
  const validationName = props.name === 'username' ? 'name' : props.name;
  const { t } = useTranslation('profile');
  const [disabled, setDisabled] = useState(true);
  const methods: any = useFormContext();
  const user = useSelector(selectValue);
  useEffect(() => {
    if (props.clear) {
      methods.setValue('username', user?.name);
      methods.setValue('email', user?.email);
      for (let i = 0; i < user?.emails.length; i++) {
        methods.setValue(`email-${i}`, user?.emails[i].email);
      }
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
    methods.setValue('username', user?.name);
    methods.setValue('email', user?.email);
    for (let i = 0; i < user?.emails.length; i++) {
      methods.setValue(`email-${i}`, user?.emails[i].email);
    }
    setDisabled((oldValue) => !oldValue);
  };

  return {
    t,
    disabled,
    methods,
    clickHandler,
    validationName,
  };
}
