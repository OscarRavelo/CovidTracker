import React, { useContext,  useState } from "react";
import useFetch from "../../Hooks/useFetch";
import StateContext from "../../Hooks/useContext";
import './GlobalDeaths.css';
import Loader from  '../Loading/Loading';
import { FormattedNumber } from "react-intl";
const GlobalDeaths = () => {
  const state = useContext(StateContext);
  const [question, setQuestion] = useState("deaths");
  const {data, isFetching} = useFetch("https://covid2019-api.herokuapp.com/v2/current");

 

  return (
    <div className="container GlobalScore">
    
    <div className={` GlobalScore-data ${question}`} >
      <h1> global {question} </h1> <h2>
      <FormattedNumber value={state.data[question]} />
      </h2>
      <ul>

      {
        isFetching ? 
        data.data.map( d => {
            return (<li key={d.location}><FormattedNumber value={d[question]} /> <strong>{question}</strong> {d.location}</li>) 
        }) : (<Loader />)
      }
      </ul>
      <div>
      </div>
    </div>
          <button className="myButton red" onClick={ () => setQuestion("deaths")}>Deaths</button> <button className="myButton green"  onClick={ () => setQuestion("recovered")}  >Recovered</button>
    </div>
    
  );
};

export default GlobalDeaths;
