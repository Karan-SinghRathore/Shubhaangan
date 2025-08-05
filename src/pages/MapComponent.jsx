import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const location = {
  lat: 26.8183611,
  lng: 75.85575,
};

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAt95uPkEvTTor20NkBC65UfopwLWRdBJ0", // Replace this with your API key
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={19}
        mapTypeId="hybrid" // optional: adds satellite + labels
      >
        <Marker position={location} />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
