const Receipt = () => {
  return (
    <>
      <div>
        <h1 className="text-white font-bold text-sm">Receipt ID</h1>
        <div className="flex flex-row items-center gap-2 rounded-lg py-1 px-2 bg-gray-900 border-[1px] border-gray-400 text-gray-400 focus-within:border-blue-500 transition-[2s]">
          <input
            className="placeholder:text-gray-400 focus-visible:outline-none w-full bg-gray-900 caret-gray-400 text-gray-200"
            type="text"
            autoComplete="off"
            placeholder="1234567890"
            maxLength={24}
            id="receipt"
          ></input>
        </div>
      </div>
    </>
  );
};

export default Receipt;