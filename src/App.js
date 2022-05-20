import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/App/Landing";
import laptop from "./img/laptop.png";
import world from "./img/world.png";
import bicycle from "./img/bicycle.png";
import plant from "./img/plant.png";
import money from "./img/money.png";

const App = () => {
  return (
    <>
      <Navbar current={0} />
      <Landing />
      <div className="bg-gray-800 h-screen w-full flex flex-col items-center font-[Inter] text-white">
        <div className="flex flex-col items-center justify-center text-center mx-5 my-4">
          <h1 className="text-white text-4xl font-bold">
            What is Trash<span className="text-gray-400">4</span>
            <span className="text-[#5cf695]">Cash</span>?
          </h1>
          <p className="text-white">
            <br />
            It's a web application aimed to provide incentive for recycling and
            providing a simple way to do so.
            <br /> <br />
            Support the local stores near you and get rewarded for cleaning up
            your community! Getting{" "}
            <span className="text-[#5cf695]">started is easy</span>!
          </p>
          <img src={laptop} className="animate-wiggle" alt="Laptop" />
        </div>
      </div>
      <div className="bg-gray-800 h-[50vh] w-full flex flex-col items-center font-[Inter] text-white">
        <div className="flex flex-col items-center justify-center text-center mx-5">
          <h1 className="text-white text-3xl font-bold">
            1. <span className="text-[#5cf695]">Browse</span> available stores
          </h1>
          <img src={world} className="animate-wiggle2" alt="World" />
          <h1 className="text-white text-3xl font-bold">
            2. <span className="text-[#5cf695]">Visit</span> one near you
          </h1>
          <img src={bicycle} className="animate-bicycle" alt="World" />
          <h1 className="text-white text-3xl font-bold">
            3. <span className="text-[#5cf695]">Recycle</span> your goods
          </h1>
          <img src={plant} className="animate-hovering" alt="World" />
          <h1 className="text-white text-3xl font-bold">4. Submit your form and <span className="text-[#5cf695]">get rewarded</span></h1>
          <img src={money} className="animate-money" alt="World" />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </>
  );
};

export default App;
