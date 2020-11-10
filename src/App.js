import "./App.css";
import GlobalCase from "./Components/GlobalCases/GlobalCases";
import GlobalDeaths from "./Components/GlobalDeaths/GlobalDeaths";
import Header from "./Components/Header/Header";
import StateContext from "./Hooks/useContext";
import useFetch from "./Hooks/useFetch";
import CaseByCountry from "./Components/CasesByCountry/CasesByCountry";
import Countries from "./Components/Countries/Countries";
import Graph from "./Components/Graph/Graph";
function App() {
  const { data, isFetching } = useFetch("https://covid2019-api.herokuapp.com/v2/total");

  return (
    <div className="App">
      <Header />
      {isFetching ? (
        <div>
            <Graph />
          <StateContext.Provider value={data}>
            <GlobalCase />
            <GlobalDeaths />
          </StateContext.Provider>
          <CaseByCountry />
          <Countries />
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
}

export default App;
