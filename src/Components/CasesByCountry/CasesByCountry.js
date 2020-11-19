import React from 'react';
import { FormattedNumber } from 'react-intl';
import useFetch from '../../Hooks/useFetch';
import Loader from '../Loading/Loading';
import './CasesByCountry.css';



const CaseByCountry = () => {
  const {data, isFetching} =  useFetch("https://covid2019-api.herokuapp.com/v2/current");
    return(<div className="CasesByCountry container ">
        <h1>Confirmed Cases by Country/Region</h1>
        {
            isFetching ? (<div>
                <ul>

                {data.data.map( d => (<li key={d.location}><FormattedNumber value={d.confirmed} /> confirmed {d.location}</li>))}
                </ul>
            </div>) : (<Loader />)
        }
    </div>)
}

export default CaseByCountry;