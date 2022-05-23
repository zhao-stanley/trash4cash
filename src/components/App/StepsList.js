import world from "../../img/world.png";
import bicycle from "../../img/bicycle.png";
import money from "../../img/money.png";
import Steps from "./Steps";
import GSpan from "./GSpan";

const StepsList = () => {
  return (
    <>
      <Steps img={world} animate="animate-wiggle2" alt={"World"} svg={false}>
        1. <GSpan>Browse</GSpan> available stores
      </Steps>
      <Steps
        img={bicycle}
        animate="animate-bicycle"
        alt={"Bicycle"}
        svg={false}
      >
        2. <GSpan>Visit</GSpan> one near you
      </Steps>
      <Steps animate="my-4" svg={true}>
        3. <GSpan>Recycle</GSpan> your goods
      </Steps>
      <Steps img={money} animate="animate-money" alt={"Money"} svg={false}>
        4. Submit your form and{" "}
        <GSpan>get rewarded</GSpan>
      </Steps>
    </>
  );
};

export default StepsList;
