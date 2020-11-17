import useFetch from '../../Hooks/useFetch';
import { Marker, Popup } from 'react-leaflet'

const MapConfirmed = ({contry}) => {
    const {data, isFetching} = useFetch(`https://api.opencagedata.com/geocode/v1/json?key=a843cfff56ac48d9aec3eab474a9ada8&q=Frauenplan+1%2C+99423+Weimar%2C+${contry}&pretty=1`);
    console.log('MapConfirmed', contry)
    return (
        <div>
            
                
                {
                    isFetching && (data.results.length >= 1) ? <div><Marker position={data.results[0].geometry} >
            <Popup>
                {data.results[0].components.country}
            </Popup>
        </Marker></div> : <div>...loading</div>
                }
            
        </div>
    )
}

export default MapConfirmed;