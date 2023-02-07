import { useEditProfileInputsModalConfig } from 'hooks';

export default function EditProfileInputsModal(props: {
  children: JSX.Element;
  name: string;
  setEnableProfileModalEdit: (value: string) => void;
}) {
  const { cancelHandler, saveHandler } = useEditProfileInputsModalConfig(
    props.setEnableProfileModalEdit,
    props.name
  );
  return (
    <div className='w-full h-screen absolute left-0 top-[9rem] bg-global-layout-bg'>
      <div className='w-full min-h-[10rem] bg-[#24222F] rounded-b-xl'>
        <div className='w-full min-h-[10rem] flex justify-center items-center'>
          <div className='flex flex-col gap-2 w-[80%] items-center'>
            {props.children}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between px-10 mt-20 text-white'>
        <div onClick={cancelHandler} className='cursor-pointer'>
          Cancel
        </div>
        <div
          onClick={saveHandler}
          className='cursor-pointer bg-button-red px-5 py-2 rounded'
        >
          Add
        </div>
      </div>
    </div>
  );
}
