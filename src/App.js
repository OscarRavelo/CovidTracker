import "./App.css";
import GlobalCase from "./Components/GlobalCases/GlobalCases";
import GlobalDeaths from "./Components/GlobalDeaths/GlobalDeaths";
import Header from "./Components/Header/Header";
import StateContext from "./Hooks/useContext";
import useFetch from "./Hooks/useFetch";
import CaseByCountry from "./Components/CasesByCountry/CasesByCountry";
import Countries from "./Components/Countries/Countries";
import Graph from "./Components/Graph/Graph";
import Loader from "./Components/Loading/Loading";
import {  IntlProvider} from 'react-intl'
import MapView from "./Components/Map/MapView";
import Position from "./Components/Position/Position";
function App() {
  const { data, isFetching } = useFetch("https://covid2019-api.herokuapp.com/v2/total");

  return (
    <div className="App">
    <IntlProvider locale="en" >
      <Header />
      
      {isFetching ? (
          <StateContext.Provider value={data}>
        <div className="App-gridcontainer">
        <MapView  />
            <GlobalCase />
            <GlobalDeaths />
          <CaseByCountry />
          <Countries />
            <Graph />
        </div>
          </StateContext.Provider>
      ) : (
        <Loader />
      )}
    </IntlProvider>
    </div>
  );
}

export default App;
