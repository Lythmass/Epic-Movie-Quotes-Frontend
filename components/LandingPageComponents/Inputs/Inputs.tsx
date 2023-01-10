import { InputsType } from 'types';

export default function InputLayout(props: InputsType) {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label className='text-white' htmlFor={props.label}>
        {props.label}
        <span className='text-button-red'> {!props.isOptional && '*'}</span>
      </label>
      <input
        className='py-2 px-3 rounded-[0.25rem] bg-[#CED4DA] placeholder-[#6C757D]'
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
