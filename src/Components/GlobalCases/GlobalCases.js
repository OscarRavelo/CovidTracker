import React, { useContext } from "react";
import StateContext from '../../Hooks/useContext';
import { FormattedNumber, IntlProvider} from 'react-intl'
const GlobalCase = () => {
const state = useContext(StateContext);
  return (
    <div>
   

    
        <div>
          <h1>global cases</h1>
          <FormattedNumber value={state.data.confirmed} />
        </div>
    
      
    </div>
  );
};

export default GlobalCase;
