import { ModalLayout, Inputs, ModalButton } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { InputsGroupData } from 'data';
import { InputsType } from 'types';

export default function LoginModal(props: {
  setShowRegistrationModal: (value: boolean) => void;
}) {
  const InputsGroup: InputsType[] = InputsGroupData;
  const methods = useForm({ mode: 'all' });
  const displayInputs = InputsGroup.map((input) => {
    if (input.label === 'Email' || input.label === 'Password') {
      return (
        <Inputs
          key={input.label}
          isOptional={input.isOptional}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
        />
      );
    }
  });
  const submitHandler = () => {
    console.log('haha');
  };
  return (
    <ModalLayout
      title='Login to your account'
      message='Welcome back! Please enter your details.'
    >
      <>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submitHandler)}
            className='w-[80%] flex flex-col items-center justify-center gap-4'
          >
            {displayInputs}
            <div className='w-full pt-5 flex flex-col gap-4 items-center justify-center'>
              <ModalButton text='Sign in' color='red' />
              <ModalButton text='Sign in with Google' color='white' />
            </div>
          </form>
        </FormProvider>
        <p className='text-[#6C757D] mt-4'>
          Missing an account?{' '}
          <span
            onClick={() => props.setShowRegistrationModal(true)}
            className='text-[#0D6EFD] underline cursor-pointer'
          >
            Sign up
          </span>
        </p>
      </>
    </ModalLayout>
  );
}
