import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 h-[80vh] w-full flex flex-col items-center justify-center font-[Inter]">
        <div className="w-[80vw] max-w-5xl text-white flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-4xl lg:text-5xl mb-4">Error {":("}</h1>
            <p className="lg:text-2xl">
              This is awkward! You're missing key information required to redeem
              a gift card.
            </p>
          </div>
          <Link
            className="bg-[#60BF88] text-white text-lg py-2 px-8 sm:p-4 sm:text-2xl font-medium rounded-xl transition-[3s] hover:bg-[#3e7d58] shadow-lg shadow-black w-min"
            to="/"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
