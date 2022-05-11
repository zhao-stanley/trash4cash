import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Globe from "./components/Globe";
import mobileCheck from "./utility/mobileCheck";

const App = () => {
  return (
    <>
      <Navbar current={0} />
      <div className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center font-[Inter]">
        <div className="h-[80vh] items-center flex flex-col justify-center">
          <Globe />
          <h1
            className={
              mobileCheck()
                ? "text-[#5cf695] z-[1] font-bold text-4xl sm:text-7xl m-5 text-center break-words select-none w-screen" //expand the hero section over the canvas + remove rotate capability if using mobile device
                : "text-[#5cf695] z-[1] font-bold text-4xl sm:text-7xl m-5 text-center break-words select-none w-auto"
            }
          >
            <span className="text-white">Save the </span>Earth
            <br />
            <span className="text-white">Save </span>money
            <br />
            <span className="text-white">It's a </span>win-win.
          </h1>
          <Link
            className="bg-[#60BF88] text-white text-lg p-2 sm:p-4 sm:text-2xl font-medium rounded-xl transition-[3s] hover:bg-[#3e7d58] mt-8 sm:mt-12 z-[1] shadow-lg shadow-black"
            to="/browse"
          >
            Browse available stores
          </Link>
        </div>
        <div className="h-[20vh]"></div>
      </div>
      <div className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center font-[Inter]">
        <h1>test</h1>
      </div>
    </>
  );
};

export default App;
