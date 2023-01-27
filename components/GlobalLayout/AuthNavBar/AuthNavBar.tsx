/* eslint-disable @next/next/no-img-element */
import { BurgerMenu, LanguageChanger } from 'components';
import { useState } from 'react';
import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';

export default function NavBar() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const { t } = useTranslation('profile');
  const screenWidth = useWindowWidth();
  return (
    <div className='w-full z-[100] fixed top-0 flex justify-between px-9 items-center h-[5.35rem] bg-navbar-color'>
      <div
        onClick={() => setBurgerMenu(true)}
        className='cursor-pointer lg:cursor-default'
      >
        {screenWidth <= 1024 && (
          <img className='w-5 h-4' src='/assets/images/burger.png' alt='menu' />
        )}
        {screenWidth > 1024 && <p className='text-[#DDCCAA]'>{t('title')}</p>}
      </div>
      <div className='flex gap-8 items-center'>
        <div className='cursor-pointer'>
          <img
            className='w-5 h-6'
            src='/assets/images/ring.png'
            alt='notifications'
          />
        </div>
        {screenWidth > 1024 && <LanguageChanger />}
        <div className='text-white rounded cursor-pointer px-5 py-2 border border-white'>
          {t('logout')}
        </div>
      </div>
      <BurgerMenu setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
    </div>
  );
}
