import Navbar from "../components/Navbar";
import { useMemo } from "react";
import { useLocation, Link, useNavigate  } from "react-router-dom";
import Prefilled from "../components/Verify/Prefilled";
import Receipt from "../components/Verify/Receipt";
import stores from "../data/stores.json";
import verifyReceipt from "../utility/verifyReceipt";

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const Verify = () => {
  let storeCheck = false;
  let addCheck = false;
  let navigate = useNavigate();
  let query = useQuery();
  const queryStore = query.get("store");
  const queryAddress = query.get("address");
  const name = localStorage.getItem("name") ? localStorage.getItem("name") : "John Doe";

  //Check if the query URL actually matches stores
  stores.forEach((e) => {
    if (e.name === queryStore && e.address === queryAddress) {
      return (storeCheck = addCheck = true);
    }
  });

  return (
    <>
      <Navbar />
      {storeCheck && addCheck ? (
        <div className="bg-gray-800 h-screen w-full flex flex-col items-center font-[Inter]">
          <h1 className="text-white font-bold text-4xl text-center mt-8">
            Verify Recycling
          </h1>

          <div className="w-[75vw] flex flex-col gap-4 mt-4">
            <Prefilled tag={"Store"}>{queryStore}</Prefilled>
            <Prefilled tag={"Address"}>{queryAddress}</Prefilled>
            <Prefilled tag={"Name"}>{name}</Prefilled>
            <Receipt />
            <button
              type="submit"
              onClick={() => {
                let val = document.getElementById("receipt").value;
                if (val) {
                  verifyReceipt(name, queryStore, queryAddress, val);
                  return navigate("/browse", { replace: true });
                }
              }}
              className="bg-[#60BF88] text-white text-xs p-2 sm:p-4 sm:text-2xl font-medium rounded-xl transition-[3s] hover:bg-[#3e7d58] shadow-sm shadow-black w-[40vw] mx-auto"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-8 h-[80vh]">
          <h1 className="text-white font-bold text-4xl text-center">
            Please select a store via the Browse tab and make sure you are logged in.
          </h1>
          <Link
            className="bg-[#60BF88] text-white text-lg p-2 sm:p-4 sm:text-2xl font-medium rounded-xl transition-[3s] hover:bg-[#3e7d58] shadow-lg shadow-black"
            to="/browse"
          >
            Browse available stores
          </Link>
        </div>
      )}
    </>
  );
};

export default Verify;
