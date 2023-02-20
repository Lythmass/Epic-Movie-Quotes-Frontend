import { useWindowWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';

export default function useViewQuoteModalHeaderConfig() {
  const dispatch = useDispatch();
  const windowSize = useWindowWidth();
  const { t } = useTranslation('movies');
  return { dispatch, windowSize, t };
}
