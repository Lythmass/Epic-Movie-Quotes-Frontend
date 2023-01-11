import { Inputs, ModalButton, ModalLayout } from 'components';
import { InputsType } from 'types';
import { InputsGroupData } from 'data';
import { useForm, FormProvider } from 'react-hook-form';

export default function RegistrationModal(props: {
  setShowLoginModal: (value: boolean) => void;
}) {
  const InputsGroup: InputsType[] = InputsGroupData;
  const methods = useForm({ mode: 'all' });

  const displayInputs = InputsGroup.map((input) => {
    return (
      <Inputs
        key={input.label}
        isOptional={input.isOptional}
        label={input.label}
        type={input.type}
        placeholder={input.placeholder}
      />
    );
  });
  const submitHandler = () => {
    console.log('haha');
  };
  return (
    <ModalLayout title='Create an account' message='Start your journey!'>
      <>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submitHandler)}
            className='w-[80%] flex flex-col items-center justify-center gap-4'
          >
            {displayInputs}
            <div className='w-full pt-5 flex flex-col gap-4 items-center justify-center'>
              <ModalButton text='Get started' color='red' />
              <ModalButton text='Sign up with Google' color='white' />
            </div>
          </form>
        </FormProvider>
        <p className='text-[#6C757D] mt-4'>
          Already have an account?{' '}
          <span
            onClick={() => props.setShowLoginModal(true)}
            className='text-[#0D6EFD] underline cursor-pointer'
          >
            Log in
          </span>
        </p>
      </>
    </ModalLayout>
  );
}
