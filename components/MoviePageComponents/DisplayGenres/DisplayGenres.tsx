export const DisplayGenres: React.FC<{ name: string }> = (props) => {
  return (
    <div className='cursor-default text-white text-center bg-[#6C757D] py-[0.375rem] px-3 rounded font-bold'>
      {props.name}
    </div>
  );
};

export default DisplayGenres;
