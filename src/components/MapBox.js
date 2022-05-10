import Map, { Marker, GeolocateControl } from "react-map-gl";
import stores from "../data/stores.json";
import MapItem from "./MapItem";
const token = process.env.REACT_APP_MAPBOXTOKEN;

let storemarkers = [];
stores.forEach((s, index) => {
  storemarkers.push(
    <Marker longitude={s.long} latitude={s.lat} anchor="bottom" key={index}>
      <MapItem lat={s.lat} long={s.long} address={s.address} k={index + 1} />
    </Marker>
  );
});

const MapBox = () => {
  return (
      <Map
        initialViewState={{
          latitude: 40.78,
          longitude: -73.72,
          zoom: 8,
        }}
        style={{ width: "100%", height: "40vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={token}
      >
        <GeolocateControl />
        {storemarkers}
      </Map>
  );
};

export default MapBox;
