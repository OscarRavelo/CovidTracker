import './App.css';
import GlobalCase from './Components/GlobalCases/GlobalCases';
import GlobalDeaths from './Components/GlobalDeaths/GlobalDeaths';
import Header from './Components/Header/Header';
import StateContext from './Hooks/useContext';
import useFetch from './Hooks/useFetch';
function App() {
const {data, isFetching} = useFetch("https://covid19.mathdro.id/api/");

  return (
    <div className="App">
     <Header />
     {
       isFetching ? (<StateContext.Provider value={data}>
     <GlobalCase />
     <GlobalDeaths />
     </StateContext.Provider>) : (<div>...Loading</div>)
     }
     
    </div>
  );
}

export default App;
