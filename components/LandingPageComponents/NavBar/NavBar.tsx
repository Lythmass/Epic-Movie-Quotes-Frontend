import { Button } from 'components';
import { useEffect, useState } from 'react';
import { LanguageChanger } from 'components';

export default function NavBar() {
  const [getWindowWidth, setGetWindowWidth] = useState(0);
  useEffect(() => {
    setGetWindowWidth(window.innerWidth);
  }, []);
  return (
    <div className='w-full flex justify-between items-center px-10 lg:px-16'>
      <h1 className='text-skin-color'>MOVIE QUOTES</h1>
      <div className='flex justify-center items-center gap-5'>
        {getWindowWidth >= 1024 && <LanguageChanger />}
        {getWindowWidth >= 1024 && <Button text='Sign up' color='red' />}
        <Button text='Log in' color='none' />
      </div>
    </div>
  );
}
