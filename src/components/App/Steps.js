const Steps = ({ img, children, animate, alt, svg }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold mx-5 lg:text-5xl lg:max-w-[75vw]">{children}</h1>
        {svg ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto text-[#5cf695] animate-altspin my-8 sm:w-[35vw] xl:w-96"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ) : (
          <img src={img} className={`${animate} sm:w-[35vw] xl:w-96`} alt={alt} draggable={false}/>
        )}
      </div>
    </>
  );
};

export default Steps;
