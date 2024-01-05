import React, { useState } from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./leaflet.css";

const Leaflet = () => {
  const [center, setCenter] = useState({ lat: 24.8500, lng: 89.3711 }); // Set for Bogra, Bangladesh
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <div>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
      </MapContainer>
    </div>
  );
};

export default Leaflet;
