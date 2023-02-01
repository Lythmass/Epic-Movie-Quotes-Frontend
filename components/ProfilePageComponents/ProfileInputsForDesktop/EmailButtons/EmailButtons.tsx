import { removeEmail } from 'services';

export default function EmailButtons(props: { value: string }) {
  const deleteHandler = async () => {
    try {
      await removeEmail({ email: props.value });
    } catch (errors: any) {
      console.log(errors);
    }
  };
  return (
    <div className='flex justify-center items-center mb-3 w-[15rem] gap-5'>
      <p className='cursor-pointer'>Make this primary</p>|
      <p onClick={deleteHandler} className='cursor-pointer'>
        Remove
      </p>
    </div>
  );
}
