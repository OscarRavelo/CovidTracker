import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import StateContext from "../../Hooks/useContext";
import './GlobalDeaths.css';
const GlobalDeaths = () => {
  const state = useContext(StateContext);
  const [question, setQuestion] = useState("deaths");
  const url = `https://covid19.mathdro.id/api/${question}`;
  const {data, isFetching} = useFetch(url);
  console.log("globalDeaths", isFetching);

  useEffect(() => {

  }, [url])

  return (
    <div className="GlobalScore" >
      <h1> global {question} </h1> <p>{state[question].value}</p>
      <ul>

      {
        isFetching ? 
        data.map( d => {
            return (<li key={d.combinedKey} >{d[question]} {question} <br /> 
            {d.combinedKey}</li>)
        }) : (<div>...loading</div>)
      }
      </ul>
      <div>
          <button onClick={ () => setQuestion("deaths")}>Deaths</button> <button onClick={ () => setQuestion("recovered")}  >Recovered</button>
      </div>
    </div>
    
  );
};

export default GlobalDeaths;
