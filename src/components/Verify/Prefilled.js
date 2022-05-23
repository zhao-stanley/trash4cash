const Prefilled = ({ tag, children }) => {
  return (
    <>
      <div>
        <h1 className="text-white font-bold text-sm">{tag}</h1>
        <div className="flex flex-row items-center gap-2 rounded-lg py-1 px-2 bg-gray-900 w-full border-[1px] border-gray-600 text-gray-400">
          {children}
        </div>
      </div>
    </>
  );
};

export default Prefilled;
