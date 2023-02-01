import { useTranslation } from 'next-i18next';
import { Inputs } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setShowNewEmailModal } from 'slices/newEmailModalSlice';
import { addNewEmail } from 'services';

export default function AddNewEmailModal() {
  const { t } = useTranslation('profile');
  const methods = useForm({ mode: 'all' });
  const dispatch = useDispatch();
  const submit = async (data: any) => {
    try {
      await addNewEmail(data);
    } catch (errors: any) {
      console.log(errors);
    }
  };
  return (
    <div className='w-full absolute z-[100] h-screen bg-frozen-bg flex justify-center'>
      <div className='w-1/3 backdrop-blur-xl h-80 bg-[#11101A] mt-[10rem] rounded-xl flex flex-col items-start py-6'>
        <h1 className='px-8 text-2xl font-medium text-white'>
          {t('multiple-emails.add-new-email')}
        </h1>
        <hr className='border-[#CED4DA33] opacity-50 w-full mt-6' />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submit)}
            className='w-full h-full px-8 flex justify-center flex-col gap-10'
          >
            <Inputs
              isOptional={true}
              label={t('multiple-emails.new-email')}
              validationIndex='email'
              type='mail'
              placeholder={t('multiple-emails.enter-new-email')}
              namespace='profile'
            />
            <div className='text-white flex gap-8 text-xl items-center self-end'>
              <div
                onClick={() => dispatch(setShowNewEmailModal(false))}
                className='cursor-pointer'
              >
                {t('multiple-emails.cancel')}
              </div>
              <button
                type='submit'
                className='cursor-pointer py-2 px-4 bg-button-red rounded'
              >
                {t('multiple-emails.add')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
