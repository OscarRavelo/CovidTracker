import React, { useContext, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import StateContext from "../../Hooks/useContext";
const GlobalDeaths = () => {
  const state = useContext(StateContext);
  const [url, setUrl] = useState("https://covid19.mathdro.id/api/deaths")
  const {data, isFetching} = useFetch(url);
  const [question, setQuestion] = useState("deaths");
  

  return (
    <div>
      <h1> global deaths </h1> <p>{state.deaths.value}</p>
      <ul>

      {
        isFetching ? 
        data.map( d => {
            return (<li key={d.combinedKey} >{d.deaths} deaths <br /> 
            {d.combinedKey}</li>)
        }) : (<div>...loading</div>)
      }
      </ul>
      <div>
          <button onClick={ () => setQuestion("deaths")}>Deaths</button> <button onClick={ () => setQuestion("Recovered")} onClick={() =>setUrl("https://covid19.mathdro.id/api/recovered")} >Recovered</button>
      </div>
    </div>
    
  );
};

export default GlobalDeaths;
