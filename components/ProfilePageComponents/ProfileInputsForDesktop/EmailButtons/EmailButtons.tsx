import { useRemoveEmail } from 'hooks';

export default function EmailButtons(props: {
  value: string;
  name: string;
  verified: boolean;
}) {
  const deleteHandler = useRemoveEmail(props.value);
  return (
    <div className='flex justify-start items-center mb-3 w-[15rem] gap-5'>
      <p className='cursor-pointer'>
        {props.name === 'email'
          ? 'Primary email'
          : props.verified
          ? 'Make this primary'
          : 'Not verified'}
      </p>

      {props.name !== 'email' && (
        <>
          <span>|</span>
          <p onClick={deleteHandler} className='cursor-pointer'>
            Remove
          </p>
        </>
      )}
    </div>
  );
}
