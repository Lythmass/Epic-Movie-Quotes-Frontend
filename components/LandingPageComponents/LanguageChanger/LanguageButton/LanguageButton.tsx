import { LanguageButtonType } from 'types';
import { clickHandler } from 'helpers';

export default function LanguageButton(props: LanguageButtonType) {
  return (
    <button
      onClick={() => clickHandler(props.language, props.setCurrentLanguage)}
      className={`hover:text-button-red ${
        props.currentLanguage === props.language && 'text-button-red'
      }`}
    >
      {props.language}
    </button>
  );
}
