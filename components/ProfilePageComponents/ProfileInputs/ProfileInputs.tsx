import { useTranslation } from 'next-i18next';
import { ProfileInputsType } from 'types';

export default function ProfileInputs(props: ProfileInputsType) {
  const { t } = useTranslation('profile');
  return (
    <div className='flex flex-col w-[80%]'>
      <label className='mb-1'>{props.label}</label>
      <div className='flex justify-between'>
        <input
          className='bg-[rgba(0,0,0,0)] w-full focus:outline-none text-lg'
          type={props.type}
          disabled
          defaultValue={props.value}
          placeholder={props.placeholder}
          name={props.name}
        />
        <p className=''>{t('edit')}</p>
      </div>
      <hr className='mt-1 border-[#CED4DA80]' />
    </div>
  );
}
