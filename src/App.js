import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/App/Landing";
import laptop from "./img/laptop.png";
import StepsList from "./components/App/StepsList";
import GSpan from "./components/App/GSpan";

const App = () => {
  return (
    <>
      <Navbar current={0} />
      <Landing />
      <div className="bg-gray-800 h-screen w-full flex flex-col items-center font-[Inter] text-white">
        <div className="flex flex-col items-center justify-center text-center mx-5 my-4">
          <h1 className="text-white text-4xl font-bold">
            What is Trash<span className="text-gray-400">4</span>
            <GSpan>Cash</GSpan>?
          </h1>
          <p className="text-white">
            <br />
            It's a web application aimed to incentivize recycling and provide a
            straightforward process to do so.
            <br />
            <img
              src={laptop}
              className="animate-wiggle"
              alt="Laptop"
              draggable={false}
            />{" "}
            <br />
            Support local businesses and get rewarded for cleaning up
            your community; <GSpan className="font-bold">it's that easy</GSpan>!
          </p>
        </div>
      </div>
      <div className="bg-gray-800 h-[50vh] w-full flex flex-col items-center font-[Inter] text-white">
        <div className="flex flex-col items-center justify-center text-center mx-5 max-w-full">
          <StepsList />
        </div>
      </div>
    </>
  );
};

export default App;
