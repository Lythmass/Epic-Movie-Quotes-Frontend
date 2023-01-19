export default function clickHandler(
  language: string,
  setCurrentLanguage: (value: string) => void,
  router: any,
  pathname: string,
  asPath: string,
  query: object
) {
  router.push({ pathname, query }, asPath, {
    locale: language === 'Geo' ? 'ka' : 'en',
  });
  setCurrentLanguage(language);
}
