import React, { useEffect } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  data?: any[];
}

const MapPage: React.FC<Props> = ({ data = [] }) => {
  useEffect(() => {
    const map = L.map("map").setView([36.2077, -119.3473], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const icon = L.icon({
      iconUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    data.forEach((item) => {
      if (item?.lat && item?.lng) {
        L.marker([item.lat, item.lng], { icon })
          .addTo(map)
          .bindPopup(item.name || "Supervisor");
      }
    });

    return () => {
      map.remove();
    };
  }, [data]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Supervisor Map</h2>
      <div id="map" style={{ height: "500px", width: "100%" }} />
    </div>
  );
};

export default MapPage;
