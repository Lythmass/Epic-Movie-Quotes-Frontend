/* eslint-disable @next/next/no-img-element */
import { ModalLayout, Inputs, ModalButton } from 'components';
import { FormProvider } from 'react-hook-form';
import { useForgotPasswordModalConfig } from 'hooks';

export default function ForgotPasswordModal(props: {
  setShowLoginModal: (value: boolean) => void;
  setResetSentModal: (value: boolean) => void;
}) {
  const { methods, email, t, submit } = useForgotPasswordModalConfig(
    props.setResetSentModal
  );
  return (
    <ModalLayout
      title={t('forgotPasswordModal.title')}
      message={t('forgotPasswordModal.message')}
    >
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submit)}
          className='w-[80%] flex flex-col items-center justify-center gap-6'
        >
          <Inputs
            isOptional={email.isOptional}
            label={t(email.label)}
            validationIndex={email.label}
            type={email.type}
            placeholder={t(email.placeholder)}
          />
          <ModalButton text={t('forgotPasswordModal.button')} color='red' />
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
        </form>
      </FormProvider>
    </ModalLayout>
  );
}
