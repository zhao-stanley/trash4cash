import Navbar from "../components/Navbar";
import Top3 from "../components/Leaderboard/Top3";
import lb from "../data/leaderboard.json";
import Footer from "../components/Footer/Footer";

let top10 = [];

for (let i = 3; i < lb.length; i++) {
  top10.push(
    <div
      className="text-white bg-gray-400 rounded-lg px-3 py-2 my-1 w-full flex flex-row items-center justify-start gap-4 lg:gap-6 shadow-md"
      key={i}
    >
      <div className="w-4">
        <span className="font-bold text-xl lg:text-2xl">{i + 1}.</span>
      </div>
      <div
        className="bg-white rounded-full w-12 h-12 lg:w-16 lg:h-16 border-white border-2 shadow-md shadow-[#ffffff5f] bg-cover bg-center"
        style={{ backgroundImage: `url(${lb[i].img})` }}
      ></div>
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">
          {lb[i].username}
        </h1>
        <h2 className="text-sm lg:text-lg font-medium text-gray-100">${lb[i].earned}</h2>
      </div>
    </div>
  );
}

const Leaderboard = () => {
  return (
    <>
      <Navbar current={2} />
      <div className="bg-gray-800 h-auto w-full flex flex-col items-center font-[Inter] my-6">
        <h1 className="text-white font-bold text-4xl text-center mb-4 lg:text-5xl">
          Leaderboard
        </h1>
        <div
          className="w-[90vw] max-w-2xl h-[screen] p-4 text-white flex flex-col items-center justify-center"
          id="leaderboard"
        >
          <Top3 fPlace={lb[0]} sPlace={lb[1]} tPlace={lb[2]} />
          <div className="mt-4 w-full h-full flex flex-col justify-center items-center">
            {top10}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Leaderboard;
