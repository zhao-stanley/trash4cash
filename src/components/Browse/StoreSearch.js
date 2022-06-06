import React from "react";
import searchFilter from "../../utility/searchFilter";

const StoreSearch = () => {
  return (
    <div className="flex flex-row items-center gap-2 rounded-lg py-1 px-2 mt-6 bg-white mb-2 w-[80vw] max-w-5xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        id="searchbar"
        onKeyUp={() => searchFilter()}
        className="placeholder:italic placeholder:text-black focus-visible:outline-none w-full"
        type="text"
        autoComplete="off"
        placeholder={"Search for a store.."}
      ></input>
    </div>
  );
};

export default StoreSearch;
