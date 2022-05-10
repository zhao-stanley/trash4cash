import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar balance={5000} current={0} />
      <div className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center">
        <div className="h-[80vh] items-center flex">
          <h1 className="text-[#60BF88] font-[Inter] z-[1] font-bold text-7xl m-5 text-center break-words">
            <span className="text-white">TRASH</span><br className="sm:hidden"/>
            <span className="text-[#BEC8DC]">4</span>CASH
          </h1>
        </div>
        <div className="h-[20vh]"></div>
      </div>
    </>
  );
}

export default App;
