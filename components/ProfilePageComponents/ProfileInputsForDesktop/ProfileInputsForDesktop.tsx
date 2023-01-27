export default function ProfileInputsForDesktop(props: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label>{props.label}</label>
      <div className='flex gap-5 items-center w-full'>
        <input
          className='p-2 text-black w-[72%] rounded-[0.25rem]'
          type={props.type}
          placeholder={props.placeholder}
        />
        <p>Edit</p>
      </div>
    </div>
  );
}
