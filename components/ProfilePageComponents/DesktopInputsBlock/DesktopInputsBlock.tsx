import { ProfileInputsForDesktop, AddEmailButton } from 'components';
import { useWindowWidth } from 'hooks';

export default function DesktopInputsBlock() {
  const screenWidth = useWindowWidth();
  return (
    <div className='mt-20 w-full'>
      <ProfileInputsForDesktop
        placeholder='Enter your username'
        label='Username'
        type='text'
      />
      <hr className='border-[#CED4DA80] opacity-50 w-[72%] my-8' />
      <div className='flex flex-col gap-8'>
        <ProfileInputsForDesktop
          placeholder='Enter your email'
          label='Email'
          type='mail'
        />
        {screenWidth > 1024 && <AddEmailButton />}
      </div>
      <hr className='border-[#CED4DA80] opacity-50 w-[72%] my-8' />
      <ProfileInputsForDesktop
        placeholder='Enter your password'
        label='Password'
        type='password'
      />
    </div>
  );
}
