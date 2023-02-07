import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';

export default function useDesktopInputsBlockConfig() {
  const screenWidth = useWindowWidth();
  const { t } = useTranslation('profile');
  const user = useSelector(selectValue);

  return {
    screenWidth,
    t,
    user,
  };
}
