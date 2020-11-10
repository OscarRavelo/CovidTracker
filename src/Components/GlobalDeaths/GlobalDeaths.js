import React, { useContext,  useState } from "react";
import useFetch from "../../Hooks/useFetch";
import StateContext from "../../Hooks/useContext";
import './GlobalDeaths.css';
const GlobalDeaths = () => {
  const state = useContext(StateContext);
  const [question, setQuestion] = useState("deaths");
  const {data, isFetching} = useFetch("https://covid2019-api.herokuapp.com/v2/current");
  console.log("globalDeaths", isFetching);

 

  return (
    <div>

    <div className="GlobalScore" >
      <h1> global {question} </h1> <p>{state.data[question]}</p>
      <ul>

      {
        isFetching ? 
        data.data.map( d => {
            return (<li key={d.location}>{d[question]} {question} {d.location}</li>) 
        }) : (<div>...loading</div>)
      }
      </ul>
      <div>
      </div>
    </div>
          <button onClick={ () => setQuestion("deaths")}>Deaths</button> <button onClick={ () => setQuestion("recovered")}  >Recovered</button>
    </div>
    
  );
};

export default GlobalDeaths;
