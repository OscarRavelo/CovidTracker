import React from 'react';
import useFetch from '../../Hooks/useFetch';
import Loader from '../Loading/Loading';
import './Countries.css';

const Countries = () => {
  const {data, isFetching} =   useFetch("https://covid2019-api.herokuapp.com/countries")
    return(<div className="container contries">
        <h1>Countries/Regions</h1>
        {
            
            isFetching ? (<div>
                <p>{data.countries.length}</p>
            </div>) : (<Loader />)
        }
    </div>);
}

export default Countries;