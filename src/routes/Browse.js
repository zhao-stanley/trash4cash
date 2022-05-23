import { Link } from "react-router-dom";
import StoreList from "../components/Browse/StoreList";
import StoreSearch from "../components/Browse/StoreSearch";
import MapBox from "../components/MapBox";
import Navbar from "../components/Navbar";
import stores from "../data/stores.json";
let storelist = [];

stores.forEach((s, index) => {
  storelist.push(
    <li
      className="h-[33.33%] w-full p-2 cursor-pointer active:bg-gray-200 border-b-[1px] grid grid-flow-col items-center"
      key={index}
      onClick={() => document.getElementById(index + 1).click()}
    >
      <div className="flex flex-col w-[70vw]">
        <h1 className="font-bold">
          {index + 1}
          {". "}
          <span className="font-normal">{s.name}</span>
        </h1>
        <h2 className="text-xs">{s.address}</h2>
      </div>
      <Link to={`/verify?store=${s.name}&address=${s.address}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-auto text-[#3a9c5e] hover:text-[#5cf695] transition-[3s]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>
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
        <StoreSearch />
        <StoreList storelist={storelist} />
      </div>
    </>
  );
};

export default Browse;
