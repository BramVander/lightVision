import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css";

const mapPosition = [51.5017145191548, 5.493854839498243];

function Map() {
  // ASK LOCATION
  // SET LAT / LNG
  // USE LAT / LNG FOR MAP ROUTE

  return (
    <div className={styles.container}>
      <h2 className={styles.mapTitle}>
        Find Us @
        <a href="https://www.profolux.nl" target="_blank">
          Profolux
        </a>
      </h2>

      <div className={styles.mapContainer}>
        <MapContainer
          center={mapPosition}
          zoom={16}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition}>
            <Popup className={styles.popup}>
              <a
                href="https://www.google.com/maps/dir/51.5760799,5.4475251/Profolux+bv,+Ekkersrijt+1005,+5692+AB+Son/@51.5411066,5.4277722,13z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x47c6e6d2599377b1:0xdae7cec7704ef3f0!2m2!1d5.4935323!2d51.5007114!3e0?entry=ttu"
                target="_blank"
              >
                Show me how to get there
              </a>
              Ekkersrijt 1005 <br></br>
              5692 AB Son <br></br>
              Nederland
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
