const StoreList = ({storelist}) => {
  return (
    <>
      <ul
        className="bg-white overflow-y-scroll  h-48 w-[90vw] sm:w-[80vw] max-w-5xl rounded-lg font-medium mx-5 shadow-md shadow-black"
        id="store-list"
      >
        {storelist}
        <div
          className="h-full w-full max-w-5xl py-2 px-3 cursor-pointer active:bg-gray-200"
          style={{ display: "none" }}
          id="none"
        >
          <p>
            No stores found...{" "}
          </p>
        </div>
      </ul>
    </>
  );
};

export default StoreList;
