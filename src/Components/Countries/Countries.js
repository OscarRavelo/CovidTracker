import React from 'react';
import useFetch from '../../Hooks/useFetch';
import Loader from '../Loading/Loading';

const Countries = () => {
  const {data, isFetching} =   useFetch("https://covid2019-api.herokuapp.com/countries")
    return(<div>
        <h1>Countries/Regions</h1>
        {
            
            isFetching ? (<div>
                <p>{data.countries.length}</p>
            </div>) : (<Loader />)
        }
    </div>);
}

export default Countries;