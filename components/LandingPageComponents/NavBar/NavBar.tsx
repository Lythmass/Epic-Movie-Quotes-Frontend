import { Button } from 'components';
import { LanguageChanger } from 'components';
import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { NavBarType } from 'types';

export const NavBar: React.FC<NavBarType> = (props) => {
  const getWindowWidth = useWindowWidth();
  const { t } = useTranslation('common');
  return (
    <div className='w-full flex justify-between items-center px-10 lg:px-16'>
      <div className='flex flex-col justify-center items-start w-[55%]'>
        <h1 className='text-skin-color'>{t('title')}</h1>
        {getWindowWidth < 1024 && <LanguageChanger />}
      </div>
      <div className='flex justify-center items-center gap-5'>
        {getWindowWidth >= 1024 && <LanguageChanger />}
        {getWindowWidth >= 1024 && (
          <Button
            setShowModal={props.setShowRegistrationModal}
            text={t('buttons.sign-up')}
            color='red'
          />
        )}
        <Button
          setShowModal={props.setShowLoginModal}
          text={t('buttons.log-in')}
          color='none'
        />
      </div>
    </div>
  );
};

export default NavBar;
