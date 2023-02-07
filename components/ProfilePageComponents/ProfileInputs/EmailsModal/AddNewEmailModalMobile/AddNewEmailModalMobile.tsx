import { validation } from 'helpers';
import { FormProvider } from 'react-hook-form';
import { setShowNewEmailModalMobile } from 'slices/newEmailModalSlice';
import { useAddNewEmail } from 'hooks';
import { useRef } from 'react';

export default function AddNewEmailModalMobile() {
  const { t, methods, submit, dispatch } = useAddNewEmail();
  const cancelHandler = () => {
    dispatch(setShowNewEmailModalMobile(false));
  };
  const formRef = useRef(null);
  return (
    <div className='w-full h-screen absolute left-0 top-[9rem] z-[50] bg-global-layout-bg'>
      <div className='w-full min-h-[10rem] bg-[#24222F] rounded-b-xl'>
        <div className='w-full min-h-[10rem] flex justify-center items-center'>
          <div className='flex flex-col gap-2 w-[80%] items-center'>
            <FormProvider {...methods}>
              <form
                ref={formRef}
                onSubmit={methods.handleSubmit(submit)}
                className='w-full h-full flex justify-center flex-col gap-2'
              >
                <label className='self-start text-white'>Add new email</label>
                <input
                  {...methods.register('email', validation['email'])}
                  name='email'
                  type='mail'
                  autoComplete='off'
                  className='w-full bg-[#CED4DA] h-12 rounded-[0.3rem] text-black px-3'
                />
                <p className='self-start text-button-red h-4'>
                  {t(methods.formState.errors['email']?.message)}
                </p>
                <div className='w-full absolute left-0 top-[10rem] flex items-center justify-between px-10 mt-20 text-white'>
                  <div onClick={cancelHandler} className='cursor-pointer'>
                    Cancel
                  </div>
                  <button
                    type='submit'
                    className='cursor-pointer bg-button-red px-5 py-2 rounded'
                  >
                    Add
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
