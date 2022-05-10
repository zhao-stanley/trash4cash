import { useMap } from "react-map-gl";
import icon from "../img/icon.png";

const MapItem = ({ lat, long, k }) => {
  const { current: map } = useMap();

  const onClick = () => {
    map.flyTo({ center: [long, lat], zoom: 15 });
    //console.log("Lat: " + lat + "\nLong: " + lat);
  };

  return (
    <button onClick={onClick} id={k}>
      <img src={icon} alt="Store" className="w-6 h-6" />
      <p className="font-extrabold">{k}</p>
    </button>
  );
};

export default MapItem;
