import { ButtonType } from 'types';

export default function Button(props: ButtonType) {
  return (
    <button
      onClick={() => props.setShowModal(true)}
      className={`border ${
        props.color === 'red'
          ? 'border-button-red bg-button-red'
          : 'border-white'
      } text-white px-7 py-2 rounded-[0.25rem]`}
    >
      {props.text}
    </button>
  );
}
