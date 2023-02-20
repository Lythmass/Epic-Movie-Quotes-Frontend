export const NotificationsModal = () => {
  return (
    <div className='w-full fixed z-[100] mt-[5.35rem] bg-black min-h-screen'>
      <div className='px-8 py-5'>
        <div className='flex items-center text-white justify-between'>
          <h1 className='text-xl font-medium'>Notifications</h1>
          <p className='text-sm underline cursor-pointer'>Mark all as read</p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='w-full h-[4rem] rounded border border-[#6C757D80]'></div>
        </div>
      </div>
    </div>
  );
};
export default NotificationsModal;
