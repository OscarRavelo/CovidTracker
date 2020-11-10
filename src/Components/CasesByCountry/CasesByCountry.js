import React from 'react';
import useFetch from '../../Hooks/useFetch';
import './CasesByCountry.css';


const CaseByCountry = () => {
  const {data, isFetching} =  useFetch("https://covid2019-api.herokuapp.com/v2/current");
    return(<div className="CasesByCountry">
        <h1>Confirmed Cases by Country/Region</h1>
        {
            isFetching ? (<div>
                <ul>

                {data.data.map( d => (<li key={d.location}>{d.confirmed} confirmed {d.location}</li>))}
                </ul>
            </div>) : (<div>...loading</div>)
        }
    </div>)
}

export default CaseByCountry;