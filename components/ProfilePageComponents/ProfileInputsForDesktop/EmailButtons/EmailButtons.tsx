import { useRemoveEmail, useChangePrimaryEmail } from 'hooks';
import { useTranslation } from 'next-i18next';
import { EmailButtonsType } from 'types';

export default function EmailButtons(props: EmailButtonsType) {
  const deleteHandler = useRemoveEmail(props.value);
  const primaryChangerHandler = useChangePrimaryEmail(
    props.verified,
    props.name,
    props.setPrimaryChanged
  );
  const { t } = useTranslation('profile');
  return (
    <div className='flex justify-start items-center mb-3 w-[15rem] gap-5'>
      <p
        className='cursor-pointer'
        onClick={() => {
          primaryChangerHandler(props.value);
        }}
      >
        {props.name === 'email'
          ? t('multiple-emails.primary')
          : props.verified
          ? t('multiple-emails.make-primary')
          : t('multiple-emails.not-verified')}
      </p>

      {props.name !== 'email' && (
        <>
          <span>|</span>
          <p onClick={deleteHandler} className='cursor-pointer'>
            {t('multiple-emails.remove')}
          </p>
        </>
      )}
    </div>
  );
}
