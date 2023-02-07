import { useSaveOrCancelConfig } from 'hooks';
import { SaveOrCancelType } from 'types';

export const SaveOrCancel: React.FC<SaveOrCancelType> = (props) => {
  const { clearHandler, profilePictureHandler, t } =
    useSaveOrCancelConfig(props);
  return (
    <div className='flex gap-12 text-white items-center text-xl'>
      <div onClick={clearHandler} className='cursor-pointer'>
        {t('cancel')}
      </div>
      <button
        onClick={profilePictureHandler}
        type='submit'
        className='cursor-pointer py-[0.56rem] px-4 bg-button-red rounded'
      >
        {t('save')}
      </button>
    </div>
  );
};

export default SaveOrCancel;
