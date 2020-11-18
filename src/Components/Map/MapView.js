import React from 'react';
import {MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapCases from './MapCases';

const MapView = () => {
    return (
        <div  >

        <MapContainer center={{lat: "61.477065", lng: "21.791781"}} zoom={1} scrollWheelZoom={false}  >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {<MapCases />} */}
        
      
      </MapContainer>
        </div>
    )
}

export default MapView;