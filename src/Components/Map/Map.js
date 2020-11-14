import {
    ComposableMap,
    Geographies,
    Geography,
    Marker, 
    ZoomableGroup
  } from "react-simple-maps"
  import React, {useState} from 'react';

  const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const Map = () => {
    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });


  function handleMoveEnd(position) {
    setPosition(position);
  }
    return (
    <div>
      <ComposableMap>
      <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
        <Geographies geography={geoUrl}>

          {({geographies}) => geographies.map(geo =>
            <Geography stroke="#fff"  key={geo.rsmKey} geography={geo} />
          )}
        
        </Geographies>
        </ZoomableGroup>
        <Marker coordinates={[-74.006, 40.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      </ComposableMap>
    </div>
  )
}



export default Map;