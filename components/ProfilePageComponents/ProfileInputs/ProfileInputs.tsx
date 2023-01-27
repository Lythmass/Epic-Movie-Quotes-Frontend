export default function ProfileInputs(props: {
  label: string;
  data: string;
  type: string;
}) {
  return (
    <div className='flex flex-col w-[80%]'>
      <label className='mb-1'>{props.label}</label>
      <div className='flex justify-between'>
        <input
          className='bg-[rgba(0,0,0,0)] w-full focus:outline-none text-lg'
          value={props.data}
          type={props.type}
          disabled
        />
        <p className=''>Edit</p>
      </div>
      <hr className='mt-1 border-[#CED4DA80]' />
    </div>
  );
}
