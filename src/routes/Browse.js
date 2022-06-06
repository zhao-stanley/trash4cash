import { Link } from "react-router-dom";
import StoreList from "../components/Browse/StoreList";
import StoreSearch from "../components/Browse/StoreSearch";
import Footer from "../components/Footer/Footer";
import MapBox from "../components/MapBox";
import Navbar from "../components/Navbar";
import stores from "../data/stores.json";
let storelist = [];

stores.forEach((s, index) => {
  storelist.push(
    <li
      className="h-[33.33%] max-w-5xl p-2 cursor-pointer active:bg-gray-200 hover:bg-gray-200 transition-[3s] border-b-[1px] flex flex-row justify-between items-center"
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
          className="h-8 w-8 mx-auto text-[#3a9c5e] hover:text-[#32d26c] transition-[3s]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clipRule="evenodd"
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
      <div className="bg-gray-800 h-[85vh] w-full flex flex-col items-center justify-center font-[Inter]">
        <div className="border-[#88cca4] border-[3px] w-[90vw] sm:w-[80vw] max-w-5xl rounded-3xl overflow-hidden shadow-lg shadow-black z-[1]">
          <MapBox />
        </div>
        <StoreSearch />
        <StoreList storelist={storelist} />
      </div>
      <Footer />
    </>
  );
};

export default Browse;
