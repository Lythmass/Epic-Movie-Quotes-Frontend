import { useRemoveEmail } from 'hooks';

export default function EmailButtons(props: { value: string; name: string }) {
  const deleteHandler = useRemoveEmail(props.value);
  return (
    <div className='flex justify-start items-center mb-3 w-[15rem] gap-5'>
      <p className='cursor-pointer'>
        {props.name === 'email' ? 'Primary email' : 'Make this primary'}
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
