/* eslint-disable @next/next/no-img-element */
export default function AddEmailButton() {
  return (
    <div className='border w-[12rem] cursor-pointer border-white py-3 px-4 rounded flex gap-2 justify-center items-center'>
      <img className='w-5 h-5' src='/assets/images/plus.png' alt='add' />
      <p>Add new email</p>
    </div>
  );
}
