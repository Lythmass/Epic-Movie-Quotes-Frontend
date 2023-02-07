import { validation } from 'helpers';

import { usePasswordValidationEffects } from 'hooks';

export const EditUsername: React.FC<{ name: string; type: string }> = (
  props
) => {
  const validationName = 'password';
  const {
    methods,
    validatePasswordConfirmation,
    t,
    fifteenOrLess,
    eightOrMore,
  } = usePasswordValidationEffects();
  return (
    <>
      <div className='flex flex-col gap-4 justify-center bg-[#11101A] border border-[#CED4DA33] w-full rounded p-6 mt-5'>
        <h1 className='text-base'>{t('validation.contain')}</h1>
        <ul className='text-sm list-disc'>
          <li
            className={`${eightOrMore ? 'text-[#198754]' : 'text-[#9C9A9A]'}`}
          >
            <span
              className={`${eightOrMore ? 'text-white' : 'text-[#9C9A9A]'}`}
            >
              {t('validation.more-than', { num: '8' })}
            </span>
          </li>
          <li
            className={`${fifteenOrLess ? 'text-[#198754]' : 'text-[#9C9A9A]'}`}
          >
            <span
              className={`${fifteenOrLess ? 'text-white' : 'text-[#9C9A9A]'}`}
            >
              {t('validation.less-than', { num: '15' })}
            </span>
          </li>
        </ul>
      </div>
      <div className='w-full pt-8'>
        <label className='self-start'>{t('mobile.new-password')}</label>
        <input
          {...methods.register(props.name, validation[validationName])}
          name={props.name}
          type={props.type}
          autoComplete='off'
          className='w-full bg-[#CED4DA] h-12 rounded-[0.3rem] text-black px-3'
        />
        <p className='self-start text-button-red h-4'>
          {t(methods.formState.errors[props.name]?.message)}
        </p>
      </div>
      <div className='w-full mt-6 pb-8'>
        <label className='self-start'>{t('mobile.confirm-new-password')}</label>
        <input
          {...methods.register(
            'password_confirmation',
            validatePasswordConfirmation
          )}
          name='password_confirmation'
          type={props.type}
          autoComplete='off'
          className='w-full bg-[#CED4DA] h-12 rounded-[0.3rem] text-black px-3'
        />
        <p className='self-start text-button-red h-4'>
          {t(methods.formState.errors['password_confirmation']?.message)}
        </p>
      </div>
    </>
  );
};

export default EditUsername;
