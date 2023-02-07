import { setMobileConfirmationModal } from 'slices/mobileConfirmationModalSlice';
import { useDispatch } from 'react-redux';

export default function ConfirmationModal() {
  const dispatch = useDispatch();
  return (
    <div className='w-screen h-screen flex top-[-9rem] absolute justify-center bg-frozen-bg z-[200]'>
      <div className='w-[80%] flex-col gap-4 h-[12rem] bg-[#211F2B] mt-[8rem] flex justify-center items-center'>
        <h1 className='text-center'>Are you sure to make changes?</h1>
        <div className='w-full flex flex-col gap-4 translate-y-8'>
          <hr className='w-full bg-[#CED4DA33] opacity-20' />
          <div className='w-full flex justify-between px-8 items-center'>
            <div
              className='cursor-pointer'
              onClick={() => dispatch(setMobileConfirmationModal(false))}
            >
              Cancel
            </div>
            <button
              type='submit'
              className='bg-button-red h-10 flex items-center px-2 rounded'
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
