export const DisplayGenres: React.FC<{ name: string; size?: string }> = (
  props
) => {
  return (
    <div
      className={`${
        props.size === 'small' && 'text-xs h-[1.25rem] flex items-center '
      } cursor-default text-white text-center bg-[#6C757D] py-[0.375rem] px-3 rounded font-bold`}
    >
      {props.name}
    </div>
  );
};

export default DisplayGenres;
