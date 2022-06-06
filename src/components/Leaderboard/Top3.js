const Top3 = ({fPlace, sPlace, tPlace}) => {
  return (
    <>
      <div className="flex flex-row justify-center items-end max-w-full gap-2">
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="bg-white rounded-full w-20 h-20 border-[#C0C0C0] border-2 shadow-md shadow-[#adadad] bg-cover bg-center"
            style={{ backgroundImage: `url(${sPlace.img})` }}
          ></div>
          <h1 className="text-white font-extrabold absolute mt-8 mb-2 bg-[#C0C0C0] w-6 h-6 rounded-full shadow-md shadow-[#adadad]">
            2
          </h1>
          <h2 className="text-[#C0C0C0] text-sm lg:text-xl font-bold mt-1 lg:mt-3">
            {sPlace.username}
          </h2>
          <h2 className="text-[#C0C0C0] text-xs lg:text-md font-semibold">
            ${sPlace.earned}
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="bg-white rounded-full w-28 h-28 border-[#FFD700] border-2 shadow-md shadow-[#9b8c39] bg-cover bg-center"
            style={{ backgroundImage: `url(${fPlace.img})` }}
          ></div>
          <h1 className="text-white text-3xl font-extrabold absolute mt-20 mb-12 bg-[#FFD700] w-9 h-9 rounded-full shadow-md shadow-[#9b8c39]">
            1
          </h1>
          <h2 className="text-[#FFD700] text-xl lg:text-3xl font-extrabold mt-2 lg:mt-3">
            {fPlace.username}
          </h2>
          <h2 className="text-[#FFD700] text-md lg:text-xl font-bold">
            ${fPlace.earned}
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="bg-white rounded-full w-20 h-20 border-[#CD7F32] border-2 shadow-md shadow-[#7e5832] bg-cover bg-center"
            style={{ backgroundImage: `url(${tPlace.img})` }}
          ></div>
          <h1 className="text-white font-extrabold absolute mt-8 mb-2 bg-[#CD7F32] w-6 h-6 rounded-full shadow-md shadow-[#7e5832]">
            3
          </h1>
          <h2 className="text-[#CD7F32] text-sm lg:text-xl font-bold mt-1 lg:mt-3">
            {tPlace.username}
          </h2>
          <h2 className="text-[#CD7F32] text-xs lg:text-md font-semibold">
          ${tPlace.earned}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Top3;
