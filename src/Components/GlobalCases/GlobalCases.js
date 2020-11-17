import React, { useContext } from "react";
import StateContext from '../../Hooks/useContext';
import { FormattedNumber} from 'react-intl'
import './GlobalCases.css';
const GlobalCase = () => {
const state = useContext(StateContext);
  return (
    <div className="container GlobalCases-style">
   

    
        <div>
          <h1>global cases</h1>
          <p>
          <FormattedNumber value={state.data.confirmed} />
          </p>
        </div>
    
      
    </div>
  );
};

export default GlobalCase;
