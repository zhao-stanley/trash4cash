import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/App/Landing";
import laptop from "./img/laptop.png";
import StepsList from "./components/App/StepsList";
import GSpan from "./components/App/GSpan";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar current={0} />
      <Landing />
      <div className="bg-gray-800 h-auto w-full flex flex-col items-center font-[Inter] text-white">
        <div className="flex flex-col items-center justify-center text-center mx-5 my-24">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            What is Trash<span className="text-gray-400">4</span>
            <GSpan>Cash</GSpan>?
          </h1>
          <p className="text-white w-[75vw] lg:w-[50vw] xl:w-[40vw] max-w-3xl lg:text-2xl">
            <br />
            It's a web application aimed to incentivize recycling and provide a
            straightforward process to do so.
            <br />
            <img
              src={laptop}
              className="animate-wiggle sm:w-[35vw] xl:w-96 mx-auto"
              alt="Laptop"
              draggable={false}
            />{" "}
            <br />
            Support local businesses and get rewarded for cleaning up your
            community; <GSpan className="font-bold">it's that easy</GSpan>!
          </p>
        </div>
      </div>
      <div className="bg-gray-800 h-min w-full flex flex-col items-center font-[Inter] text-white my-24">
        <div className="flex flex-col items-center justify-center text-center w-[75vw] lg:w-[100vw] overflow-hidden">
          <StepsList />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default App;
