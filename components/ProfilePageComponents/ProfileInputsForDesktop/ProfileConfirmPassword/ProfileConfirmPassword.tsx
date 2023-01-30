import { useFormContext } from 'react-hook-form';
export default function ProfileConfirmPassword() {
  const methods = useFormContext();
  return (
    <div className='w-full'>
      <input
        {...methods.register('password_confirmation')}
        className='p-2 mt-10 text-black w-full rounded-[0.25rem] disabled:bg-white'
        type='password'
        placeholder='Repeat password'
        name='password_confirmation'
      />
      <div className='flex flex-col gap-4 justify-center border border-[#CED4DA33] rounded p-6 mt-10'>
        <h1 className='text-base'>Password should contain:</h1>
        <ul className='text-sm'>
          <li>8 or more characters</li>
          <li>15 lowercase characters</li>
        </ul>
      </div>
    </div>
  );
}
