/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';
import { BurgerMenuType } from 'types';

export const BurgerMenu: React.FC<BurgerMenuType> = (props) => {
  const { t } = useTranslation('profile');
  const username = useSelector(selectValue);
  return (
    <div
      className={`w-full transition-all text-white gap-8 flex flex-col justify-start items-start px-11 pt-11 absolute lg:fixed lg:top-[4rem] lg:w-[20%] lg:left-0 h-screen bg-[#11101A] lg:bg-transparent top-0 ${
        props.burgerMenu ? 'left-0' : 'left-[-100%]'
      }`}
    >
      <div className='flex gap-5'>
        <img
          className='w-12 h-12 rounded-[50%] object-cover border border-button-red'
          src={
            username?.profile_picture !== 'null'
              ? username?.profile_picture
              : '/assets/images/tlotr.png'
          }
          alt='profile picture'
        />
        <div
          onClick={() => props.setBurgerMenu(false)}
          className='cursor-pointer'
        >
          <h1 className='text-xl'>{username?.name} </h1>
          <p className='text-sm text-[#CED4DA]'>{t('edit-profile')}</p>
        </div>
      </div>
      <div className='flex flex-col gap-8 w-full pl-[0.35rem]'>
        <div className='flex gap-10 items-center'>
          <img src='/assets/images/home.png' alt='home' />
          <p className='text-xl'>{t('news-feed')}</p>
        </div>
        <div className='flex gap-10 items-center'>
          <img src='/assets/images/camera.png' alt='movies' />
          <p className='text-xl'>{t('movies')}</p>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
