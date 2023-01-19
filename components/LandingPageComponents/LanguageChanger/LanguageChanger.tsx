import { LanguageButton } from 'components';
import { useChangeLanguage } from 'hooks';

export default function LanguageChanger() {
  const [currentLanguage, setCurrentLanguage, optionsModal, clickHandler] =
    useChangeLanguage();
  return (
    <div className=' text-white pr-4'>
      <div
        onClick={clickHandler}
        className='relative flex gap-2 cursor-pointer'
      >
        <p>{currentLanguage}</p>
        <img src='/assets/images/dropdown.png' alt='dropdown' />
        {optionsModal && (
          <div className='absolute flex flex-col w-full top-6 left-0 pr-6'>
            <LanguageButton
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
              language='Geo'
            />
            <LanguageButton
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
              language='Eng'
            />
          </div>
        )}
      </div>
    </div>
  );
}
