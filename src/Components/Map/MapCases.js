import React, {useState} from 'react';
import useFetch from '../../Hooks/useFetch';
import MapConfirmed from './MapConfirmed';

const MapCases = () => {
    const {data, isFetching} = useFetch("https://covid2019-api.herokuapp.com/v2/current");

    return(
        <div>
            {
                isFetching ? data.data.map( contry => <MapConfirmed contry={contry.location} />) : <div>...loading</div>
            }
        </div>
    )
}

export default MapCases;