import { setCookie } from 'cookies-next';
export default function clickHandler(
  language: string,
  setCurrentLanguage: (value: string) => void
) {
  setCurrentLanguage(language);
  setCookie('locale', language === 'Eng' ? 'en' : 'ka', {
    sameSite: true,
  });
}
