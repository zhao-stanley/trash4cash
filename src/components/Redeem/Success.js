import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Success = ({ store, denomination }) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 h-[80vh] w-full flex flex-col items-center justify-center font-[Inter] mb-12">
        <div className="w-[80vw] max-w-5xl my-6 text-white flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-4xl mb-4">Success!</h1>
            <p>
              Thank you for redeeming a gift card! You should receive your
              reward in your email within 10 minutes.
            </p>
            <br />
            <h1 className="font-semibold">
              Gift Card:<span className="font-normal"> {store}</span>
            </h1>
            <h1 className="font-semibold">
              Denomination:<span className="font-normal"> ${denomination}</span>
            </h1>
            <h1 className="font-semibold">
              Email:
              <span className="font-normal">
                {" "}
                {localStorage.getItem("email")
                  ? localStorage.getItem("email")
                  : "johndoe@email.com"}
              </span>
            </h1>
          </div>
          <Link
            className="bg-[#60BF88] text-white text-lg py-2 px-8 sm:p-4 sm:text-2xl font-medium rounded-xl transition-[3s] hover:bg-[#3e7d58] shadow-lg shadow-black w-min whitespace-nowrap"
            to="/rewards"
          >
            Redeem another gift card
          </Link>
        </div>
      </div>
    </>
  );
};
export default Success;
