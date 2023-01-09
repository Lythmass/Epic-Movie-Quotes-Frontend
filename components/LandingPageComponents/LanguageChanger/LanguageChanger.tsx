import { useState } from 'react';
import { LanguageButton } from 'components';

export default function LanguageChanger() {
  const [currentLanguage, setCurrentLanguage] = useState('Eng');
  const [optionsModal, setOptionsModal] = useState(false);

  function clickHandler(): void {
    setOptionsModal((oldValue) => !oldValue);
  }

  return (
    <div className=' text-white pr-4'>
      <div
        onClick={clickHandler}
        className='relative flex gap-2 cursor-pointer'
      >
        <p>{currentLanguage}</p>
        <img src='/assets/images/dropdown.png' />
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
