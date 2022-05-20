import Globe from "./Globe";
import HeroText from "./HeroText";

const Landing = () => {
  return (
    <>
      <div className="bg-gray-800 h-screen w-screen flex flex-col items-center justify-center font-[Inter] overflow-x-hidden">
        <div className="h-[80vh] items-center flex flex-col justify-center">
          <Globe />
          <HeroText />
        </div>
        <div className="h-[20vh] w-screen z-10"></div>
      </div>
    </>
  );
};

export default Landing;
