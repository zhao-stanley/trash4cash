const StoreList = ({storelist}) => {
  return (
    <>
      <ul
        className="bg-white overflow-y-scroll h-48 w-[90vw] rounded-lg font-medium mx-5 shadow-md shadow-black"
        id="store-list"
      >
        {storelist}
        <div
          className="h-full w-full py-2 px-3 cursor-pointer active:bg-gray-200"
          style={{ display: "none" }}
          id="none"
        >
          <p>
            No stores found...{" "}
            <span className="italic">Want to add a store?</span>
          </p>
        </div>
      </ul>
    </>
  );
};

export default StoreList;
