import { Inputs, ModalButton, ModalLayout } from 'components';
import { InputsType } from 'types';
import { InputsGroupData } from 'data';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useRegistrationSubmitHandler } from 'hooks';

export default function RegistrationModal(props: {
  setShowLoginModal: (value: boolean) => void;
  setHasRegistered: (value: boolean) => void;
}) {
  const InputsGroup: InputsType[] = InputsGroupData;
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation();
  const displayInputs = InputsGroup.map((input) => {
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
  const submit = useRegistrationSubmitHandler(
    methods,
    t,
    props.setHasRegistered
  );

  return (
    <ModalLayout
      title={t('registrationModal.title')}
      message={t('registrationModal.message')}
    >
      <>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submit)}
            className='w-[80%] flex flex-col items-center justify-center gap-4'
          >
            {displayInputs}
            <div className='w-full pt-5 flex flex-col gap-4 items-center justify-center'>
              <ModalButton
                text={t('registrationModal.get-started')}
                color='red'
              />
              <ModalButton text={t('registrationModal.google')} color='white' />
            </div>
          </form>
        </FormProvider>
        <p className='text-[#6C757D] mt-4'>
          {t('registrationModal.question')}{' '}
          <span
            onClick={() => props.setShowLoginModal(true)}
            className='text-[#0D6EFD] underline cursor-pointer'
          >
            {t('buttons.log-in')}
          </span>
        </p>
      </>
    </ModalLayout>
  );
}
