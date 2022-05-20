import mobileCheck from "../../utility/mobileCheck";
import { Link } from "react-router-dom";

let herobase =
  "text-[#5cf695] z-[1] font-bold text-5xl sm:text-7xl m-5 text-center break-words select-none";
let buttonbase = "h-auto z-[1] flex flex-col items-center justify-center";

const HeroText = () => {
  return (
    <>
      <div
        className={
          mobileCheck()
            ? herobase +
              " w-screen h-screen flex flex-col justify-center items-center" //expand the hero section over the canvas + remove rotate capability if using mobile device
            : herobase + " w-auto"
        }
      >
        <h1>
          <span className="text-white">Save the </span>Earth
        </h1>
        <h1>
          <span className="text-white">Save </span>money
        </h1>
        <h1>
          <span className="text-white">It's a </span>win-win.
        </h1>
        <div
          className={
            mobileCheck()
              ? "w-screen mt-12 " + buttonbase
              : "mt-8 " + buttonbase
          }
        >
          <Link
            className="bg-[#60BF88] text-white text-lg p-2 sm:p-4 sm:text-2xl font-medium rounded-xl transition-[3s] hover:bg-[#3e7d58] shadow-lg shadow-black"
            to="/browse"
          >
            Browse available stores
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroText;
