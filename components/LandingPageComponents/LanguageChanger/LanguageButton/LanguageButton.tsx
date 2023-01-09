import { LanguageButtonType } from 'types';

export default function LanguageButton(props: LanguageButtonType) {
  function clickHandler() {
    props.setCurrentLanguage(props.language);
  }
  return (
    <button
      onClick={clickHandler}
      className={`hover:text-button-red ${
        props.currentLanguage === props.language && 'text-button-red'
      }`}
    >
      {props.language}
    </button>
  );
}
