const GSpan = ({ className, children }) => {
  return (
    <>
      <span className={className + " text-[#5cf695]"}>{children}</span>
    </>
  );
};

export default GSpan;
