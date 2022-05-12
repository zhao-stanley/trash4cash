import MapBox from "../components/MapBox";
import Navbar from "../components/Navbar";
import stores from "../data/stores.json";
import searchFilter from "../utility/searchFilter";
let storelist = [];

stores.forEach((s, index) => {
  storelist.push(
    <li
      className="h-[33.33%] w-full p-2 cursor-pointer active:bg-gray-200 border-b-[1px]"
      key={index}
      onClick={() => document.getElementById(index + 1).click()}
    >
      <>
        <h1 className="font-bold">
          {index + 1}
          {". "}
          <span className="font-normal">{s.name}</span>
        </h1>
        <h2 className="text-xs">{s.address}</h2>
      </>
    </li>
  );
});

const Browse = () => {
  return (
    <>
      <Navbar current={1} />
      <div className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center font-[Inter]">
        <div className="border-[#88cca4] border-[3px] w-[90vw] rounded-3xl overflow-hidden shadow-lg shadow-black z-[1]">
          <MapBox />
        </div>
        <div className="flex flex-row items-center gap-2 rounded-lg py-1 px-2 my-2 bg-white">
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
            className="placeholder:italic placeholder:text-black focus-visible:outline-none"
            type="text"
            autoComplete="off"
            placeholder={"Search for a store.."}
          ></input>
        </div>
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
              No stores found... <span className="italic">Want to add a store?</span>
            </p>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Browse;
