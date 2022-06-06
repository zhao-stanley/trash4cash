import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Giftcards from "../components/Rewards/Giftcards";

const Rewards = () => {
  return (
    <>
      <Navbar current={3} />
      <div className="bg-gray-800 h-auto lg:h-[70vh] w-full flex flex-col items-center font-[Inter] mb-12">
        <div className="w-[80vw] my-6 text-white max-w-5xl">
          <h1 className="font-bold text-4xl mb-4 lg:text-5xl">Rewards</h1>
          <p className="lg:text-2xl">Redeem your credit for gift cards at your favorite store!</p>
        </div>
        <Giftcards />
      </div>
      <Footer/>
    </>
  );
};

export default Rewards;
