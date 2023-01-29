import { useTranslation } from 'next-i18next';

export default function SaveOrCancel(props: {
  clearInputs: (value: boolean) => void;
  setHasChanged: (value: boolean) => void;
}) {
  const clearHandler = () => {
    props.clearInputs(true);
    props.setHasChanged(false);
  };
  const { t } = useTranslation('profile');
  return (
    <div className='flex gap-12 text-white items-center text-xl'>
      <div onClick={clearHandler} className='cursor-pointer'>
        {t('cancel')}
      </div>
      <button
        type='submit'
        className='cursor-pointer py-[0.56rem] px-4 bg-button-red rounded'
      >
        {t('save')}
      </button>
    </div>
  );
}
