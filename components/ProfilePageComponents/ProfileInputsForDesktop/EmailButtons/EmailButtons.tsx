import { EmailButtonsType } from 'types';
import { useEmailButtonsConfig } from 'hooks';

export const EmailButtons: React.FC<EmailButtonsType> = (props) => {
  const { deleteHandler, t, primaryChangerHandler } = useEmailButtonsConfig(
    props.value,
    props.verified,
    props.name,
    props.setPrimaryChanged
  );
  return (
    <div className='flex justify-start items-center mb-3 gap-5'>
      <p
        className='cursor-pointer whitespace-nowrap'
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
};

export default EmailButtons;
