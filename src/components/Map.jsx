import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css";

const mapPosition = [51.5017145191548, 5.493854839498243];

function Map() {
  return (
    <>
      <h1 className={styles.mapTitle}>Find Us</h1>

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
            <Popup>You found us!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
