import { Link } from "react-router-dom";
import { cards } from "./cards";

const cardsList = [];
cards.forEach((e, key) => {
  cardsList.push(
    <li className="w-36 rounded-2xl h-min text-white" key={key}>
      <Link to={`/redeem?store=${e.name}`}>
        <img
          className="w-full rounded-md bg-center shadow-md shadow-[#1a1a1a] hover:opacity-70 transition-[3s]"
          src={e.image}
          draggable="false"
          alt={e.name}
        ></img>
      </Link>
      <h1 className="mt-1 font-normal text-md lg:text-xl">{e.name}</h1>
    </li>
  );
});

const Giftcards = () => {
  return (
    <>
      <ul className="grid w-auto h-auto justify-center gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {cardsList}
      </ul>
    </>
  );
};

export default Giftcards;
