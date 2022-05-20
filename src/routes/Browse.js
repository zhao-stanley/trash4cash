import StoreList from "../components/Browse/StoreList";
import StoreSearch from "../components/Browse/StoreSearch";
import MapBox from "../components/MapBox";
import Navbar from "../components/Navbar";
import stores from "../data/stores.json";
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
      <Navbar current={1}/>
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
