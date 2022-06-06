import Navbar from "../components/Navbar";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import redeemReward from "../utility/redeemReward";
import Success from "../components/Redeem/Success";
import Error from "../components/Redeem/Error";
import Footer from "../components/Footer/Footer";

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const Redeem = () => {
  //User redemption status
  let [redeemed, setRedeemed] = useState(false);
  //Get balance
  let balance = localStorage.getItem("balance")
    ? localStorage.getItem("balance")
    : 0;

  //Remove commas and formatting from balance and get raw value, convert to Number
  balance = Number(
    balance
      .toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })
      .replace(",", "")
  );

  //Default denomination selected will be $10 if user has enough, otherwise none will be selected
  let defaultAmount = balance >= 10 ? 10 : 0;

  //Radio button useState
  const [checked, setChecked] = useState(defaultAmount);

  //Query Destructuring
  let query = useQuery();
  const queryStore = query.get("store");

  //Gift Card Denominations
  const denom = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const denominations = [];
  denom.forEach((e, key) => {
    denominations.push(
      <label
        key={key}
        id={e}
        className={
          (checked === e
            ? "bg-blue-600 text-white transition-[3s] px-2 text-center rounded-md py-4 font-semibold cursor-pointer hover:bg-blue-600"
            : "bg-gray-200 px-2 text-center rounded-md py-4 font-semibold cursor-pointer") +
          (balance >= e ? " " : " text-gray-400 cursor-not-allowed")
        }
      >
        {`$${e}`}
        <input
          type="radio"
          name={e}
          checked={checked === e}
          disabled={balance < e}
          onChange={() => setChecked(e)}
          hidden
        ></input>
      </label>
    );
  });

  return queryStore ? (
    redeemed ? (
      //User has successfully redeemed
      <>
        <Success store={queryStore} denomination={checked} />
        <Footer />
      </>
    ) : (
      //User is yet to redeem a gift card
      <>
        <Navbar />
        <div className="bg-gray-800 h-auto sm:h-[80vh] w-full flex flex-col items-center font-[Inter] mb-12">
          <div className="w-[80vw] max-w-5xl my-6 text-white">
            <h1 className="font-bold text-4xl mb-4">Redeem</h1>
            <p>Redeem your credit for gift cards at your favorite store!</p>
          </div>
          <div className="flex flex-col w-[85vw] max-w-5xl h-auto">
            <div className="bg-white w-full p-4 rounded-lg flex flex-col gap-8 shadow-lg shadow-black">
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold text-gray-900">
                  {queryStore}
                </h1>
                <h2 className="text-sm text-gray-700">Choose a denomination</h2>
              </div>
              <div className="grid w-auto h-auto justify-center gap-4 grid-cols-2">
                {denominations}
              </div>
              <div className="flex flex-col">
                <div className="inline-flex flex-row justify-between">
                  <p>Current balance</p>
                  <span className="text-[#60BF88]"> ${balance}</span>
                </div>
                <div className="inline-flex flex-row justify-between">
                  <p>Credits to be deducted</p>
                  <span className="text-red-700"> - ${checked}</span>
                </div>
                <hr className="my-3" />
                <div className="inline-flex flex-row justify-between">
                  <p>Remaining Balance</p>
                  <span>
                    {" "}
                    $
                    {(balance - checked).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
              <button
                className="bg-[#60BF88] hover:bg-[#3e7d58] font-medium text-white w-full p-2 rounded-xl text-center transition-[3s] shadow-lg"
                onClick={() => {
                  if (checked > 0) {
                    redeemReward(balance, checked);
                    return setRedeemed(true);
                  }
                }}
              >
                Redeem
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  ) : (
    <>
      <Error />
      <Footer />
    </>
  );
};

export default Redeem;
