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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAt95uPkEvTTor20NkBC65UfopwLWRdBJ0", // Replace this with your API key
  });

  if (loadError) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-2">Unable to load map</p>
          <a
            href="https://maps.app.goo.gl/JARb6uRcUj4hTenQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

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
