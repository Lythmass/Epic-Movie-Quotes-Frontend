import { useTranslation } from 'next-i18next';
import { SaveOrCancelType } from 'types';

export default function useSaveOrCancelConfig(props: SaveOrCancelType) {
  const { t } = useTranslation('profile');
  const clearHandler = () => {
    props.clearInputs(true);
    props.setHasChanged(false);
    if (props.saveProfilePicture === 'prepare') {
      props.setSaveProfilePicture('no');
    }
  };
  const profilePictureHandler = () => {
    if (props.saveProfilePicture === 'prepare') {
      props.setSaveProfilePicture('yes');
    }
  };

  return { clearHandler, profilePictureHandler, t };
}
