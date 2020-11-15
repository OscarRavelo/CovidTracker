import React from 'react';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapView = () => {
    return (
        
        <MapContainer center={{lat: "61.477065", lng: "21.791781"}} zoom={13} scrollWheelZoom={false}  >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{lat: "61.477065", lng: "21.791781"}} >
            <Popup>
                this is pori
            </Popup>
        </Marker>
      
      </MapContainer>
    )
}

export default MapView;