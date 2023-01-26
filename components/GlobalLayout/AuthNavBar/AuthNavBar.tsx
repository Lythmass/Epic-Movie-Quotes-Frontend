/* eslint-disable @next/next/no-img-element */
import { BurgerMenu } from 'components';
import { useState } from 'react';

export default function NavBar() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <div className='w-full flex justify-between px-9 items-center h-[5.35rem] bg-navbar-color'>
      <div onClick={() => setBurgerMenu(true)} className='cursor-pointer'>
        <img className='w-5 h-4' src='/assets/images/burger.png' alt='menu' />
      </div>
      <div className='cursor-pointer'>
        <img
          className='w-5 h-6'
          src='/assets/images/ring.png'
          alt='notifications'
        />
      </div>
      <BurgerMenu setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
    </div>
  );
}
