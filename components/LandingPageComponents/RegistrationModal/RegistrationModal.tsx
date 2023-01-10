import { Inputs, ModalButton } from 'components';
import { InputsType } from 'types';
import { InputsGroupData } from 'data';
import { useForm, FormProvider } from 'react-hook-form';

export default function RegistrationModal() {
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
    <div className='w-full h-full z-20 fixed flex justify-center items-center bg-frozen-bg backdrop-blur-sm'>
      <div className='w-full h-full lg:w-[35%] lg:h-[51rem]'>
        <div className='flex rounded-[0.625rem] overflow-auto pt-20 pb-12 flex-col items-center justify-start gap-8 w-full h-full z-20 bg-modal-bg'>
          <div className='flex flex-col items-center gap-3'>
            <h1 className='text-white text-2xl font-medium'>
              Create an account
            </h1>
            <p className='text-[#6C757D]'>Start your journey!</p>
          </div>
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
            <span className='text-[#0D6EFD] underline cursor-pointer'>
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
