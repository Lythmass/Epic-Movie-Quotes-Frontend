import { ModalLayout, Inputs, ModalButton, RememberMe } from 'components';
import { FormProvider } from 'react-hook-form';
import { useAuthModalConfig } from 'hooks';

export default function LoginModal(props: {
  setShowRegistrationModal: (value: boolean) => void;
  setShowForgotPasswordModal: (value: boolean) => void;
  setShowLoginModal: (value: boolean) => void;
}) {
  const { InputsGroup, methods, t, submit, googleAuthHandler } =
    useAuthModalConfig();
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
  return (
    <ModalLayout
      title={t('loginModal.title')}
      message={t('loginModal.message')}
      modal={props.setShowLoginModal}
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
              <div className='w-full' onClick={googleAuthHandler}>
                <ModalButton text={t('loginModal.google')} color='white' />
              </div>
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
