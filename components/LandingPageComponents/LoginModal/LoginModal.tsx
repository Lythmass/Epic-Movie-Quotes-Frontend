import { ModalLayout, Inputs, ModalButton, RememberMe } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { InputsGroupData } from 'data';
import { InputsType } from 'types';
import { useTranslation } from 'next-i18next';
import { useAuthorizationSubmitHandler } from 'hooks';

export default function LoginModal(props: {
  setShowRegistrationModal: (value: boolean) => void;
  setShowForgotPasswordModal: (value: boolean) => void;
}) {
  const InputsGroup: InputsType[] = InputsGroupData;
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('common');
  const displayInputs = InputsGroup.map((input) => {
    if (
      t(input.label) === t('registrationModal.email') ||
      t(input.label) === t('registrationModal.password')
    ) {
      return (
        <Inputs
          key={input.label}
          isOptional={input.isOptional}
          label={t(input.label)}
          validationIndex={input.label}
          type={input.type}
          placeholder={t(input.placeholder)}
        />
      );
    }
  });
  const submit = useAuthorizationSubmitHandler(methods);
  return (
    <ModalLayout
      title={t('loginModal.title')}
      message={t('loginModal.message')}
    >
      <>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submit)}
            className='w-[80%] flex flex-col items-center justify-center gap-4'
          >
            {displayInputs}
            <RememberMe
              setShowForgotPasswordModal={props.setShowForgotPasswordModal}
            />
            <div className='w-full pt-5 flex flex-col gap-4 items-center justify-center'>
              <ModalButton text={t('loginModal.sign-in')} color='red' />
              <ModalButton text={t('loginModal.google')} color='white' />
            </div>
          </form>
        </FormProvider>
        <p className='text-[#6C757D] mt-4'>
          {t('loginModal.question')}{' '}
          <span
            onClick={() => props.setShowRegistrationModal(true)}
            className='text-[#0D6EFD] underline cursor-pointer'
          >
            {t('buttons.sign-up')}
          </span>
        </p>
      </>
    </ModalLayout>
  );
}
