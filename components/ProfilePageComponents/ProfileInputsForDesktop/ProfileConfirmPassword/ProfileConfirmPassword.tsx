import { usePasswordValidationEffects } from 'hooks';

export default function ProfileConfirmPassword() {
  const {
    methods,
    validatePasswordConfirmation,
    t,
    fifteenOrLess,
    eightOrMore,
  } = usePasswordValidationEffects();

  return (
    <div className='w-full'>
      <input
        {...methods.register(
          'password_confirmation',
          validatePasswordConfirmation
        )}
        className='p-2 mt-5 text-black w-full rounded-[0.25rem] disabled:bg-white'
        type='password'
        placeholder='Repeat password'
        name='password_confirmation'
      />
      <p className='self-start text-button-red h-4'>
        {t(methods.formState.errors['password_confirmation']?.message)}
      </p>
      <div className='flex flex-col gap-4 justify-center border border-[#CED4DA33] rounded p-6 mt-5'>
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
    </div>
  );
}
