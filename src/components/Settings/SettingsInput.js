
const SettingsInput = ({type, children, placeholder}) => {
    let first = type.charAt(0);
    first = first.toUpperCase();
    let remain = type.slice(1);
    let pl = first + remain;

  return (
    <>
      <div className="flex flex-row items-center gap-2 rounded-lg py-1 px-2 bg-gray-900 w-[60%] border-[1px] border-gray-400 text-gray-400 focus-within:border-blue-500 transition-[2s]">
        {children}
        <input
          className="placeholder:text-gray-400 focus-visible:outline-none w-full bg-gray-900 caret-gray-400 text-gray-200"
          type="text"
          autoComplete="off"
          placeholder={placeholder ? placeholder : pl}
          id={type}
          maxLength={16}
        ></input>
      </div>
    </>
  );
};

export default SettingsInput;
