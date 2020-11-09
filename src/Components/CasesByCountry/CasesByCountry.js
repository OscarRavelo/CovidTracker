import React from 'react';
import useFetch from '../../Hooks/useFetch';
import './CasesByCountry.css';


const CaseByCountry = () => {
  const {data, isFetching} =  useFetch("https://covid19.mathdro.id/api/confirmed");
    return(<div className="CasesByCountry">
        <h1>Confirmed Cases by Country/Region</h1>
        {
            isFetching ? (<div>
                <ul>

                {data.map( d => (<li key={d.combinedKey}>{d.confirmed} confirmed <br/> {d.combinedKey}</li>))}
                </ul>
            </div>) : (<div>...loading</div>)
        }
    </div>)
}

export default CaseByCountry;