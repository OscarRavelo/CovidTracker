import React from 'react';
import useFetch from '../../Hooks/useFetch';

const Countries = () => {
  const {data, isFetching} =   useFetch("https://covid2019-api.herokuapp.com/countries")
    return(<div>
        <h1>Countries/Regions</h1>
        {
            
            isFetching ? (<div>
                <p>{data.countries.length}</p>
            </div>) : (<div>...loading</div>)
        }
    </div>);
}

export default Countries;