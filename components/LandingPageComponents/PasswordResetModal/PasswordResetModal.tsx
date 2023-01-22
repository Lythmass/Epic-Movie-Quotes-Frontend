/* eslint-disable @next/next/no-img-element */
import { ModalLayout, Inputs, ModalButton } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { InputsGroupData } from 'data';
import { useTranslation } from 'next-i18next';
import { usePasswordResetSubmitHandler } from 'hooks';

export default function PasswordResetModal(props: {
  setShowLoginModal: (value: boolean) => void;
  setSuccessResetModal: (value: boolean) => void;
}) {
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('common');

  const displayInputs = InputsGroupData.map((input) => {
    if (input.type === 'password') {
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
  const submit = usePasswordResetSubmitHandler(
    methods,
    props.setSuccessResetModal
  );
  return (
    <ModalLayout
      title={t('passwordResetModal.title')}
      message={t('passwordResetModal.description')}
    >
      <FormProvider {...methods}>
        <form
          className='w-[80%] flex flex-col gap-3'
          onSubmit={methods.handleSubmit(submit)}
        >
          {displayInputs}
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
