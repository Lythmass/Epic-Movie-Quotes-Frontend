/* eslint-disable @next/next/no-img-element */
export const GoBackButtonMobile: React.FC<{
  setShowEmailsModal: (value: boolean) => void;
  setEnableProfileModalEdit: (value: string) => void;
}> = (props) => {
  return (
    <div className='w-full h-9 mt-[6.55rem] flex justify-start items-center px-10'>
      <div
        className='cursor-pointer h-full'
        onClick={() => {
          props.setShowEmailsModal(false);
          props.setEnableProfileModalEdit('');
        }}
      >
        <img
          className='w-5 h-4'
          src='/assets/images/back-arrow.png'
          alt='go-back'
        />
      </div>
    </div>
  );
};

export default GoBackButtonMobile;
