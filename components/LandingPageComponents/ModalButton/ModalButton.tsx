import { ModalButtonType } from 'types';

export const ModalButton: React.FC<ModalButtonType> = (props) => {
  return (
    <button
      className={`${
        props.color === 'red'
          ? 'border-button-red bg-button-red'
          : 'border border-white'
      } text-white w-full py-2 rounded flex justify-center items-center gap-2`}
      type='submit'
    >
      {props.color !== 'red' && (
        <img src='/assets/images/google.png' alt='google' />
      )}
      {props.text}
    </button>
  );
};

export default ModalButton;
