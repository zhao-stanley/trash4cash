import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar current={0} />
      <div className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center font-[Inter]">
        <div className="h-[80vh] items-center flex flex-col justify-center">
          <h1 className="text-[#60BF88] z-[1] font-bold text-7xl m-5 text-center break-words">
            <span className="text-white">Save the </span>Earth<br />
            <span className="text-white">Save </span>money<br />
            <span className="text-white">It's a </span>win-win.
          </h1>
          <Link className="bg-[#60BF88] opacity-[1] text-white p-4 text-2xl font-medium rounded-xl transition-[3s] hover:bg-[#60bf88be] mt-8" to="/browse">Browse available stores</Link>
        </div>
        <div className="h-[20vh]">

        </div>
      </div>
    </>
  );
}

export default App;
