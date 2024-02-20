import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";

const mapPosition = [51.5017145191548, 5.493854839498243];

function Map() {
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Your browser does not have geolocation enabled");
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setUserPosition({ lat, lng });
        },
        (error) => {
          console.error(error.message);
        }
      );
    }
  }, []);

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
                href={
                  userPosition.lat !== 0 && userPosition.lng !== 0
                    ? `https://www.google.com/maps/dir/${userPosition.lat},${userPosition.lng}/Profolux+bv,+Ekkersrijt+1005,+5692+AB+Son/@51.5559292,5.4343131,12.31z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x47c6e6d2599377b1:0xdae7cec7704ef3f0!2m2!1d5.4935323!2d51.5007114!3e0?entry=ttu`
                    : `https://www.google.com/maps/dir//Profolux+bv,+Ekkersrijt+1005,+5692+AB+Son/@51.500353,5.4917712,15.07z/data=!4m17!1m7!3m6!1s0x47c6e6d2599377b1:0xdae7cec7704ef3f0!2sProfolux+bv!8m2!3d51.5007114!4d5.4935323!16s%2Fg%2F11cn3wg7_8!4m8!1m0!1m5!1m1!1s0x47c6e6d2599377b1:0xdae7cec7704ef3f0!2m2!1d5.4935323!2d51.5007114!3e1?entry=ttu`
                }
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
