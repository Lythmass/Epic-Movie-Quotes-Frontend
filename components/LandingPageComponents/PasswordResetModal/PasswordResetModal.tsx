/* eslint-disable @next/next/no-img-element */
import { ModalLayout, Inputs, ModalButton } from 'components';
import { FormProvider } from 'react-hook-form';
import { usePasswordResetModalConfig } from 'hooks';
import { InputsType } from 'types';

export default function PasswordResetModal(props: {
  setShowLoginModal: (value: boolean) => void;
  setSuccessResetModal: (value: boolean) => void;
  setPasswordResetModal: (value: boolean) => void;
}) {
  const { methods, displayInputs, t, submit } = usePasswordResetModalConfig(
    props.setSuccessResetModal
  );
  const display = displayInputs.map((input: InputsType) => {
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
  });
  return (
    <ModalLayout
      title={t('passwordResetModal.title')}
      message={t('passwordResetModal.description')}
      modal={props.setPasswordResetModal}
    >
      <FormProvider {...methods}>
        <form
          className='w-[80%] flex flex-col gap-3'
          onSubmit={methods.handleSubmit(submit)}
        >
          {display}
          <div className='pt-2'>
            <ModalButton text={t('passwordResetModal.action')} color='red' />
          </div>
        </form>
        <div
          onClick={() => props.setShowLoginModal(true)}
          className='text-[#6C757D] flex items-center gap-3 cursor-pointer pt-3'
        >
          <img
            alt='go-back'
            className='w-4'
            src='/assets/images/back-arrow.png'
          />
          <p>{t('forgotPasswordModal.back-button')}</p>
        </div>
      </FormProvider>
    </ModalLayout>
  );
}
