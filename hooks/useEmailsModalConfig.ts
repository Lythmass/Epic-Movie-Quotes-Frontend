import { selectValue } from 'slices/userInfoSlice';
import { useSelector } from 'react-redux';
import { showNewEmailModalMobile } from 'slices/newEmailModalSlice';
import { useTranslation } from 'next-i18next';

export default function useEmailsModalConfig() {
  const user = useSelector(selectValue);
  const showNewEmailModalMobileHere = useSelector(showNewEmailModalMobile);
  const { t } = useTranslation('profile');

  return { user, showNewEmailModalMobileHere, t };
}
