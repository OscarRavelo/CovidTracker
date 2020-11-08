import React, { useContext } from "react";
import StateContext from '../../Hooks/useContext';
const GlobalCase = () => {
const state = useContext(StateContext);
  return (
    <div>
    
        <div>
          <h1>global cases</h1>
          <p>{state.confirmed.value}</p>
        </div>
      
    </div>
  );
};

export default GlobalCase;
