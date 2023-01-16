import { InputsType, ValidationType } from 'types';
export default function registerParameters(
  t: any,
  props: InputsType,
  validation: ValidationType,
  validatePasswordConfirmation: { validate: (value: string) => void }
) {
  const registerName =
    t(props.validationIndex, { lng: 'en' }).toLowerCase() === 'confirm password'
      ? 'password_confirmation'
      : t(props.validationIndex, { lng: 'en' }).toLowerCase();
  const validationRule =
    props.label.toLowerCase() ===
    t('registrationModal.password_confirmation').toLowerCase()
      ? validatePasswordConfirmation
      : validation[t(props.validationIndex, { lng: 'en' }).toLowerCase()];
  return [registerName, validationRule];
}
