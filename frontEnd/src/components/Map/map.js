import React from 'react';
import { GoogleMap, useJsApiLoader, Marker,Autocomplete } from "@react-google-maps/api";
import Route from '../Route/Route';

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

function MyComponent() {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:['places',]
  });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const center = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      <Route google={window.google} Autocomplete={Autocomplete} />
    </GoogleMap>
  ) : <></>;
}

const MapComponent = () => {
  return (
      <MyComponent />
  );
};

export default MapComponent;
