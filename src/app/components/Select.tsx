interface SelectProps {
  placeholder: string;
  className?: string;
}

function Select({ placeholder, className = "" }: SelectProps) {
  return (
    <select
      disabled
      className={`w-full pr-6 pl-6" p-3 border-2 border-black rounded text-gray-600 text-sm bg-white font-bold cursor-not-allowed opacity-60 ${className}`}
    >
      <option>{placeholder}</option>
    </select>
  );
}

export default Select;
